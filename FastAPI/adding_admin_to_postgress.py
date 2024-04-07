#create the table 
#SHA56
from fastapi import FastAPI, HTTPException, Depends
from typing import List, Annotated
from sqlalchemy.orm import Session 
import services
import schemas


#creating the tables 
services.create_database()

app = FastAPI(debug=True)

db_dependency = Annotated[Session, Depends(services.get_db)]

@app.post("/api/users", response_model=schemas.UserModel)
async def create_user(user: schemas.UserBase, db: db_dependency):
    db_user = await services.get_user_by_username(user.username, db)
    if db_user:
        raise HTTPException(status_code=400, detail="User already in use")
    
    return await services.create_user(user, db)