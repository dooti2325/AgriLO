import asyncio
import sys
import os
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import select
import uuid

# Add parent directory to path to import local modules
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from database import get_session, init_db
from models import User, UserRole
from utils.auth import get_password_hash
from config import settings

async def seed_user():
    print("Initializing database schema...")
    await init_db()
    
    print("Checking if user already exists...")
    email = "tacana4545@flemist.com"
    password = "fgh"
    
    # We need to get a session. Since get_session is an async generator, 
    # we'll use it manually here.
    async for session in get_session():
        result = await session.execute(select(User).where(User.email == email))
        user = result.scalars().first()
        
        if user:
            print(f"User {email} already exists. Updating password...")
            user.hashed_password = get_password_hash(password)
            session.add(user)
        else:
            print(f"Creating user {email}...")
            new_user = User(
                id=str(uuid.uuid4()),
                email=email,
                name="Agri-Lo Admin",
                hashed_password=get_password_hash(password),
                role=UserRole.ADMIN.value,
                is_verified=True,
                is_active=True
            )
            session.add(new_user)
        
        await session.commit()
        print(f"Successfully seeded user: {email}")
        break # Exit after one session

if __name__ == "__main__":
    asyncio.run(seed_user())
