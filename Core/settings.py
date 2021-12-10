#!/usr/bin/env python
# -*- coding: utf-8 -*-

from pydantic import BaseModel
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import MetaData

Base = declarative_base()
MetadataObj = MetaData()


class Setting(BaseModel):
    pass
