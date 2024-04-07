from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
import services
import schemas
import models
from sqlalchemy.orm import Session 
#Cors: A way for the app to automatically defend against origin requests (the requests that comes from React since react is another app)
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Annotated

app = FastAPI()

#Cors origin (means a port from a different app is allowed to call our fastapi only if it's running on our localhost on port 3000) contains URL'S from React
origins = [
    'http://localhost:3000'
]

#here we add the origins to our app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,

)

db_dependency = Annotated[Session, Depends(services.get_db)]

@app.post("/api/token")
async def generate_token(
    db: db_dependency,
    form_data: OAuth2PasswordRequestForm = Depends(),
):
    user = await services.authenticate_user(form_data.username, form_data.password, db)

    if not user:
        raise HTTPException(status_code=401, detail="Invalid Credentials")

    return await services.create_token(user)

@app.get("/api/user/me", response_model=schemas.UserModel)
async def get_user(user: schemas.UserModel = Depends(services.get_current_user)):
    return user


#test if our front end is connected to the backend
#our root endpoint
@app.get("/api")
async def root():
    return {"message":"ExamGuard"}

# Endpoint to get the names of all faculties
@app.get("/faculties/", response_model=List[str])
def get_faculties(db: Session = Depends(services.get_db)):
    faculties = db.query(models.Faculty.faculty_name).all()
    faculty_names = [faculty.faculty_name for faculty in faculties]
    return faculty_names

