from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import MetaData


SQLALCHEMY_DATABASE_URL = (
    "mysql+mysqlclient://101.132.135.180:@WzR@CsY@1260:3306/LiveStream?hcarset=utf8"
)
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
MetadataObj = MetaData()
