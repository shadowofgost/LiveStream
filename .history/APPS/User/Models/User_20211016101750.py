from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Table
from sqlalchemy.orm import relationship
from .Database import Base, MetadataObj

TableUser = Table(
    "user",
    MetadataObj,
    Column("id", Integer, primary_key=True, index=True, autoincrement=True),
    Column("number", Integer, unique=True, nullable=False, index=True),
    Column("name", String(50), nullable=False, index=True),
    Column("password", String(50), nullable=False),
    Column("email", String(50), unique=True, index=True),
    Column("phone",Integer, unique=True, index=True),
    Column("sex", Integer, nullable=False),
    Column("attr",Integer, nullable)
)


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    items = relationship("Item", back_populates="owner")


class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="items")
