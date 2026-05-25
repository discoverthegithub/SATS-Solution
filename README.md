# SATS Solutions Website

Welcome to the SATS Solutions repository! This project consists of a React frontend built with Vite, and a Node.js/Express backend, configured for easy deployment on Vercel.

## Structure

- `/frontend` - The React application (Vite + TailwindCSS).
- `/backend` - The Express backend containing email services and API endpoints.

## Local Development

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file with your environment variables (like email credentials).
4. Run the server: `npm start` (Runs on port 5000 by default)

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Deployment (Vercel)

This repository is pre-configured to be deployed as two separate Vercel projects:

1. **Backend**: Import the repository in Vercel, select the `backend` root folder. Vercel will use the `vercel.json` and automatically deploy the Express app as Serverless Functions.
2. **Frontend**: Import the repository in Vercel, select the `frontend` root folder. Set the `VITE_API_URL` environment variable during deployment to point to your new backend URL.

---
*Created automatically for deployment.*