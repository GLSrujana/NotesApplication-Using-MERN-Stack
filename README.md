NotesApp is a feature-rich notes writing application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, read, update, and delete notes seamlessly with an intuitive user interface and robust backend.

Table of Contents:

Features
Installation
Usage
Screenshots
Technologies Used
API Endpoints
Contributing
License
Contact

Features: User authentication and authorization Create, read, update, and delete notes Search and filter notes Rich text editor for note content
Responsive design for mobile and desktop Secure password storage with bcrypt Session management with JWT (JSON Web Tokens) Installation

Prerequisites:
Node.js (v14.x or later)
MongoDB (local instance or MongoDB Atlas account)

Backend Setup:

Clone the repository:

Copy code
git clone https://github.com/yourusername/NotesApp.git
cd NotesApp/backend

Install backend dependencies:

Copy code
npm install

Set up environment variables:

Create a .env file in the backend directory with the following content:

env
Copy code
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend server:

Copy code
npm start
Frontend Setup

Navigate to the frontend directory:

Copy code
cd ../frontend

Install frontend dependencies:

Copy code
npm install

Start the frontend development server:

Copy code
npm start
The application should now be running on http://localhost:3000 (frontend) and http://localhost:5000 (backend).

Usage:

Register a new account or log in with existing credentials.
Create new notes using the "Add Note" button.
View all your notes on the dashboard.
Edit or delete notes using the corresponding buttons on each note.
Use the search bar to filter notes by title or content.


Technologies Used:
Frontend:

React
Redux (for state management)
React Router (for routing)
Axios (for HTTP requests)
Draft.js or Quill (for rich text editor)

Backend:

Node.js
Express
MongoDB
Mongoose (for MongoDB object modeling)
JWT (for authentication)
Bcrypt (for password hashing)
API Endpoints
POST /api/auth/register - Register a new user
POST /api/auth/login - Log in a user
GET /api/notes - Get all notes for the authenticated user
POST /api/notes - Create a new note
GET /api/notes/:id - Get a single note by ID
PUT /api/notes/:id - Update a note by ID
DELETE /api/notes/:id - Delete a note by ID

License:
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For any questions or suggestions, please contact:

Srujana
GitHub: GLSrujana
