from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
#All of the components that we need to connect our fastapi app to our postgress db

#The URL to connect to the postgres database
URL_DATABASE = 'postgresql://postgres:ExamGuard@localhost:5432/ExamGuard'

engine = create_engine(URL_DATABASE)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()