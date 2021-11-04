from sqlalchemy import (
    Column,
    Integer,
    String,
    Table,
    Binary,
    BigInteger,
    SmallInteger,
)

from .Database import Base, MetadataObj

TableUser = Table(
    "user",
    MetadataObj,
    Column("id", BigInteger, primary_key=True, index=True, autoincrement=True),
    Column("number", Integer, unique=True, nullable=False, index=True),
    Column("name", String(50), nullable=False, index=True),
    Column("password", String(50), nullable=False),
    Column("email", String(50), unique=True, nullable=True, index=True),
    Column("phone", Integer, unique=True, nullable=True, index=True),
    Column("sex", SmallInteger, nullable=False),
    Column("attr", SmallInteger, nullable=False, index=True),
    Column("deptid", SmallInteger, nullable=False, index=True),
    Column("localid", Integer, nullable=False, index=True),
    Column("idmanager", BigInteger, nullable=False, index=True),
    Column("TimeUpdate", BigInteger, nullable=False, index=True),
)
TableUserPhoto = Table(
    "user_photo",
    MetadataObj,
    Column("id", BigInteger, primary_key=True, index=True, autoincrement=True),
    Column("user_id", BigInteger, unique=True, nullable=False, index=True),
    Column("photo", Binary, nullable=True, index=True),
    Column("idmanager", BigInteger, nullable=False, index=True),
    Column("TimeUpdate", BigInteger, nullable=False, index=True),
)


class User(Base):
    _table_ = TableUser


class UserPhoto(Base):
    _table_ = TableUserPhoto
