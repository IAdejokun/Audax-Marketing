# Audax Project

A full-stack application with a modern React frontend and Python backend.

## Project Structure

```
├── frontend/          # React + TypeScript frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── routes/      # Route definitions
│   │   ├── services/    # API services
│   │   └── lib/         # Utility functions
│   │
│   └── public/          # Static assets
│
└── backend/          # Python backend
    ├── app/
    │   ├── models/      # Database models
    │   ├── routes/      # API routes
    │   ├── schemas/     # Data validation schemas
    │   └── services/    # Business logic
    └── requirements.txt # Python dependencies
```

## Getting Started

### Prerequisites

- Node.js (16.x or later)
- Python (3.7 or later)
- npm or yarn package manager

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
# Windows
.\venv\Scripts\activate
# Unix or MacOS
source venv/bin/activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Start the backend server:

```bash
python app/main.py
```

## Features

- Modern React frontend with TypeScript
- Vite for fast development and building
- Responsive UI components
- Python backend with modular architecture
- RESTful API endpoints
- Component-based architecture with reusable UI elements
- Clean project structure following best practices

## Development

### Frontend Development

- Uses TypeScript for type safety
- Follows modern React practices with hooks and functional components
- Utilizes custom UI components in `components/ui`
- Routes defined in `routes/AppRoutes.tsx`

### Backend Development

- Modular Python backend with clear separation of concerns
- Models for database interactions
- Schemas for data validation
- Service layer for business logic
- Route handlers for API endpoints

## Building for Production

### Frontend Build

```bash
cd frontend
npm run build
# or
yarn build
```

This will create a production build in the `dist` directory.

### Backend Deployment

Ensure all dependencies are installed from `requirements.txt` before deploying to production.

## License

[MIT License](LICENSE)

---

Created with ❤️ by Your Team
