#!./env python
# -*- coding: utf-8 -*-
'''
#@Time             : 2021-10-16 09:40:29
#@Author           : Albert Wang
#@Email            : shadowofgost@outlook.com
#@Software         : Vscode
#@FilePath         : /LiveStream/APPS/User/Models/UserModel/Model.py
#@Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
#@Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
#@Description      :
#@LastTime         : 2021-11-04 22:40:25
#@LastAuthor       : Albert Wang
'''
from sqlalchemy import (
    Column,
    Integer,
    String,
    Table,
    Binary,
    BigInteger,
    SmallInteger,
)

from ..Database import Base, MetadataObj

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
    Column("timeUpdate", BigInteger, nullable=False, index=True),
    Column("delete", SmallInteger, nullable=False, index=True, default=0),
)
TableUserPhoto = Table(
    "user_photo",
    MetadataObj,
    Column("id", BigInteger, primary_key=True, index=True, autoincrement=True),
    Column("user_id", BigInteger, unique=True, nullable=False, index=True),
    Column("photo", Binary, nullable=True, index=True),
    Column("idmanager", BigInteger, nullable=False, index=True),
    Column("timeUpdate", BigInteger, nullable=False, index=True),
    Column("delete", SmallInteger, nullable=False, index=True, default=0),
)


class User(Base):
    _table_ = TableUser


class UserPhoto(Base):
    _table_ = TableUserPhoto
