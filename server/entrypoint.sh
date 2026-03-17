#!/bin/bash
set -e

# Run initial migrations if needed (Wait for database)
echo "Starting Agri-Lo Backend..."

# If using PostgreSQL, we might want a wait-for-it script here
# But for SQLite/General deployment, we just start.

# Start Gunicorn with Uvicorn workers for production
exec gunicorn main:app \
    --workers ${WORKERS:-4} \
    --worker-class uvicorn.workers.UvicornWorker \
    --bind 0.0.0.0:${PORT:-8000} \
    --timeout 120 \
    --access-logfile - \
    --error-logfile -
