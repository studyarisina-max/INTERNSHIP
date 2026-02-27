Smart Task Manager (Full-Stack Mobile App)
A professional Task Management application built with a Node.js/Express backend and an Expo React Native frontend. This project demonstrates a complete CRUD system with secure JWT Authentication.

🚀 Key Features
User Authentication: Secure Register/Login system using bcryptjs for password hashing and JSON Web Tokens (JWT).

Full CRUD Operations: Users can Create, Read, Update (toggle status), and Delete tasks.

Task Status Tracking: Tasks are tracked as Pending or Completed with real-time UI updates.

Modular Architecture: Clean folder structure separating Models, Routes, Middleware, and Screens.

Responsive UI: Built with React Native and TypeScript for a smooth cross-platform experience.
Tech Stack
Frontend React Native, Expo, TypeScript, Axios 
Backend Node.js, Express.js
Database MongoDB (Mongoose ODM) SecurityJWT, Bcrypt.js

Project structure

├── smart-task-manager-backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── smart-task-manager-frontend/
    ├── src/
    │   ├── screens/
    │   ├── services/
    │   └── navigation/

Setup Instructions
1. Backend Setup
Navigate to the backend folder: cd smart-task-manager-backend
Install dependencies: npm install
Create a .env file and add your MONGO_URI and JWT_SECRET.
Start the server: node server.js

2. Frontend Setup
Navigate to the frontend folder: cd smart-task-manager-frontend
Install dependencies: npm install
Update src/services/api.ts with your computer's Local IP Address.
Start Expo: npx expo start
scan the QR code with the Expo Go app on your phone.
