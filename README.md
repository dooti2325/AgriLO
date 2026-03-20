# Agri-Lo

<p align="center">
  <a href="https://agri-lo-six.vercel.app"><img src="https://img.shields.io/badge/Live%20Site-agri--lo--six.vercel.app-166534?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Site" /></a>
  <img src="https://img.shields.io/badge/AI%20%2B%20IoT-Smart%20Farming-f59e0b?style=for-the-badge" alt="AI and IoT" />
  <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-0f172a?style=for-the-badge" alt="Frontend" />
  <img src="https://img.shields.io/badge/Backend-FastAPI%20%2B%20Python-059669?style=for-the-badge" alt="Backend" />
</p>

<p align="center">
  Agri-Lo is an AI-powered smart farming platform that combines crop disease detection, live soil intelligence,
  multilingual agronomy support, and analytics into one polished experience.
</p>

<p align="center">
  <a href="https://agri-lo-six.vercel.app"><strong>Open Live Website</strong></a>
  ·
  <a href="https://agri-lo-six.vercel.app/auth"><strong>Launch App</strong></a>
</p>

---

## Why It Stands Out

Agri-Lo is built for the real workflow of a modern grower. Instead of splitting disease checks, soil data, recommendations, and support across multiple tools, it keeps them in one system so decisions are faster and easier.

- AI plant disease detection from crop images
- Soil monitoring with NPK, moisture, temperature, and pH inputs
- Multilingual assistant for practical farming guidance
- Analytics dashboards for trend spotting and decision support
- Expert soil testing booking and integrated service flows

## Live Links

- Website: [https://agri-lo-six.vercel.app](https://agri-lo-six.vercel.app)
- App entry: [https://agri-lo-six.vercel.app/auth](https://agri-lo-six.vercel.app/auth)
- Backend health route: `/health`

## Product Snapshot

### AI Crop Diagnosis

Upload a leaf or root image and get a fast prediction with actionable guidance.

### Soil Intelligence

Use IoT sensor readings to understand the condition of the field in real time.

### Smart Assistant

Ask farming questions in a natural way and receive crop-focused support.

### Analytics and History

Review historical patterns, compare trends, and make more confident planning decisions.

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Recharts
- Framer Motion

### Backend and AI

- FastAPI
- Python
- TensorFlow / Keras
- Beanie / MongoDB-ready architecture
- Firebase integrations

### Hardware and Data Flow

- ESP32
- MQTT
- Soil telemetry pipeline

## Local Setup

### Quick start

```bash
setup.bat
```

### Run the app

```bash
start_app.bat
```

This launches:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8000`

## Deployment Notes

- The backend now exposes a dedicated health endpoint at `/health`.
- `render.yaml` is configured to use that health check path so the service can be monitored more reliably.
- The live frontend is available at [agri-lo-six.vercel.app](https://agri-lo-six.vercel.app).

## Repo Highlights

- Clean split between `client/` and `server/`
- Production-minded FastAPI startup config
- Live deployment links surfaced prominently for demos and portfolio sharing

## Screenshots

### Landing

<img src="https://github.com/user-attachments/assets/9c77d066-2544-4f88-9510-1ffd8fdc39e5" width="100%" alt="Agri-Lo landing page" />

### Dashboard

<img src="https://github.com/user-attachments/assets/a78055a5-2966-4575-861a-0ed1f90825ae" width="100%" alt="Agri-Lo dashboard" />

### Disease Detection

<img src="https://github.com/user-attachments/assets/056c12a7-6ab9-45d9-9e31-7730879a6540" width="100%" alt="Leaf disease detection" />

## Contributing

1. Create a branch for your work.
2. Make and test your changes.
3. Open a pull request with a clear summary.

## License

This project is licensed under the [MIT License](LICENSE).
