import firebase_admin
from firebase_admin import credentials
import os
import logging

logger = logging.getLogger(__name__)

class FirebaseService:
    _instance = None
    _initialized = False

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(FirebaseService, cls).__new__(cls)
        return cls._instance

    def initialize(self):
        if self._initialized:
            return

        try:
            if not firebase_admin._apps:
                # 1. Try environment variable for JSON path
                cred_path = os.getenv("FIREBASE_CONFIG_PATH", "firebase.json")
                
                if os.path.exists(cred_path):
                    logger.info(f"Initializing Firebase with credentials from {cred_path}")
                    cred = credentials.Certificate(cred_path)
                    firebase_admin.initialize_app(cred)
                else:
                    # 2. Fallback to Project ID from env or hardcoded fallback
                    project_id = os.getenv("FIREBASE_PROJECT_ID", "agrilo-1e2de")
                    logger.info(f"Initializing Firebase with Project ID: {project_id}")
                    firebase_admin.initialize_app(options={
                        'projectId': project_id
                    })
            
            self._initialized = True
            logger.info("Firebase Admin initialized successfully")
        except Exception as e:
            logger.error(f"Failed to initialize Firebase Admin: {e}")
            # Do not raise, allow app to start but auth might fail

firebase_service = FirebaseService()
