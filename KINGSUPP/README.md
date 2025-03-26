# Music Streaming App

A modern music streaming application built with React, Node.js, and MongoDB.

## Features

- User authentication
- Browse songs and albums
- Create and manage playlists
- Search functionality
- Responsive design

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   ```

2. Create a `.env` file in the root directory with:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

3. Start the development server:
   ```bash
   npm run dev:full
   ```

This will start both the backend server and frontend development server.

## Technologies Used

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT 