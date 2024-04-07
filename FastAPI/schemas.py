from pydantic import BaseModel

'''Create our pydantic model to validate the requests from the react app 
and based on if the data is valid or not we will accept it into our fastapi app or reject the request from our react app'''
#user
class UserBase(BaseModel):
    username: str
    
    
class UserModel(UserBase):
    id: int

    class Config:
        orm_mode = True
        from_attributes = True

#Faculty
class FacultyBase(BaseModel):
    faculty_name: str
    num_of_classrooms: int
    

class FacultyModel(FacultyBase):
    id: int

    class Config:
        orm_mode = True

#Classroom
class ClassroomBase(BaseModel):
    classroom_number: str
    faculty_id: bytes

class ClassroomModel(ClassroomBase):
    id: int

    class Config:
        orm_mode = True




