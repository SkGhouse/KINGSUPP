# Devil's Music - A Modern Music Streaming Application

A sleek, devilishly-themed music streaming application built with React, Node.js, and MongoDB. This application provides a unique dark theme with red accents, offering a distinctive user experience for music lovers.

## 🎵 Features

### Core Features
- 🎧 Music playback with play/pause, next/previous, and volume controls
- 🔍 Advanced search functionality for songs, artists, and albums
- 📚 Personal library management
- 📋 Playlist creation and management
- 🎨 Unique devilish theme with red and black color scheme
- 💫 Smooth animations and transitions
- 📱 Fully responsive design for all devices

### Technical Features
- 🔒 User authentication and authorization
- 🎯 Real-time music playback
- 💾 Persistent data storage with MongoDB
- 🚀 Fast and optimized performance
- 🛡️ Secure API endpoints
- 🔄 State management with React hooks

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS for styling
- React Router for navigation
- Heroicons for icons
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Bcrypt for password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/devils-music.git
cd devils-music
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
cd ..
```

4. Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/devils-music
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

5. Start the development servers:
```bash
npm run dev:full
```

This will start:
- Backend server on http://localhost:5000
- Frontend development server on http://localhost:3000

## 📁 Project Structure

```
devils-music/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── styles/       # CSS and styling files
│   │   └── utils/        # Utility functions
│   └── public/           # Static assets
├── server/               # Backend Node.js application
│   ├── controllers/     # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── middleware/     # Custom middleware
└── package.json        # Project dependencies
```

## 🔧 Configuration

### Environment Variables
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: Backend server port

### Customization
- Theme colors can be modified in `client/tailwind.config.js`
- API endpoints can be configured in `server/routes/`
- Database models can be updated in `server/models/`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)

## 📞 Support

For support, email support@devilsmusic.com or join our Discord server.

## 🔄 Updates

### Version 1.0.0
- Initial release
- Basic music streaming functionality
- User authentication
- Playlist management

### Version 1.1.0 (Coming Soon)
- Social features
- Music recommendations
- Offline mode
- Enhanced search filters

## 📱 Mobile App

A mobile version of this application is currently in development. Stay tuned for updates!

---

Made with ❤️ by [GHOUSEE...]
