from sqlalchemy import Column, Integer, String, ForeignKey 
from database import Base
from passlib.hash import bcrypt 
 
#Representation of the table that we want to create in the database
class User(Base):
    __tablename__ = 'users'

    #index to perform better in the db
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False, index=True)
    password_hash = Column(String , nullable=False, index=True)

    def verify_password(self, password: bytes):
        return bcrypt.verify(password, self.password_hash)

class Faculty(Base):
    __tablename__ = 'faculties'

    id = Column(Integer, primary_key=True, index=True)
    faculty_name = Column(String, unique=True, nullable=False, index=True)
    num_of_classrooms = Column(Integer, index=True)
    
class ClassRoom(Base):
    __tablename__ = 'classrooms'

    #index to perform better in the db
    id = Column(Integer, primary_key=True, index=True)
    classroom_number = Column(String, unique=True, nullable=False, index=True)
    #create a foreign key for the faculty number
    faculty_id = Column(Integer, ForeignKey("faculties.id"), index=True)
    