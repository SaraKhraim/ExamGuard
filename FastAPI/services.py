from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer 
from database import Base, engine, SessionLocal
from sqlalchemy.orm import Session 
import models
import schemas
from passlib.hash import bcrypt 
from jwt import encode, decode
from typing import Annotated


JWT_SECRET = "myjwtsecret"
oauth2schema = OAuth2PasswordBearer(tokenUrl="/api/token")


#Create our database that will create our table and our columns when the fastapi app is created 
def create_database():
    return Base.metadata.create_all(bind=engine)

#dependency injection for our app where we are going to try a db connection
def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

#if there is a user with this username it will return the user if not it will return null
async def get_user_by_username(username: str, db: Session):
    return db.query(models.User).filter(models.User.username == username).first()

#hashed using SHA56
async def create_user(user: schemas.UserBase, db: Session):
    user_obj = models.User(
        username=user.username, password_hash=bcrypt.hash(user.password_hash)
    )
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj

async def authenticate_user(username: str, password: str, db: Session):
    user = await get_user_by_username(username=username, db=db)

    if not user:
        return False
    
    if not user.verify_password(password):
        return False
    
    return user

async def create_token(user: models.User):
    user_obj = schemas.UserModel.model_validate(user)

    token = encode(user_obj.model_dump(), JWT_SECRET)
    return dict(access_token = token, token_type="bearer")

async def get_current_user(db: db_dependency, token: str = Depends(oauth2schema)):
    try:
        payload = decode(token, JWT_SECRET, algorithms=["HS256"])
        user = db.query(models.User).get(payload["id"])
    except:
        raise HTTPException(status_code=401, detail="Invalid Username or Password")
    
    return schemas.UserModel.model_validate(user)