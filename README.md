StudySync – Smart Study Planner & Tracker
StudySync is a full-stack web application designed to help students organize, schedule, and track their study sessions effectively.

📚 StudySync – Smart Study Planner & Tracker
StudySync is a smart full-stack study management app that helps students create, track, and optimize their study routines. It combines personalized planning, real-time tracking, and insightful analytics to build better study habits.

🔍 Overview
StudySync was built to solve a common student problem: inconsistent study habits and disorganized learning schedules. The app allows students to create structured study plans, track completed tasks, visualize progress, and stay consistent with streaks and reminders.

🚀 Features
🔐 User Authentication – Register/Login with JWT

📝 Task Planner – Add, update, and delete study tasks

📅 Calendar View – Organize study sessions visually

📊 Analytics Dashboard – Track progress by subject and study hours

⏰ Reminders – Notifications for upcoming/overdue tasks

🤖 AI Assistant (Optional) – Get smart study suggestions using OpenAI

🌗 Responsive UI – Mobile-first clean interface with dark/light modes

🧱 Tech Stack
Layer	Tech
Frontend	React.js, Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB + Mongoose
Auth	JWT, bcrypt
AI (opt.)	OpenAI API
Deployment	Vercel (FE), Render (BE)

📁 Folder Structure
bash
Copy
Edit
studysync/
├── client/ # React frontend
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── server/ # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env.example
│   └── index.js
Getting Started
Follow these steps to run the StudySync project locally:

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/studysync.git
cd studysync
2. Install Backend Dependencies
Go to the server directory and install the necessary packages.

bash
Copy
Edit
cd server
npm install
3. Configure Environment Variables
In the server directory, create a .env file using .env.example as a template. Add your MongoDB connection string and JWT secret:

bash
Copy
Edit
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
PORT=5000
4. Install Frontend Dependencies
Go to the client directory and install the necessary packages.

bash
Copy
Edit
cd ../client
npm install
5. Run the Backend Server
Start the backend server by running:

bash
Copy
Edit
cd server
npm start
The backend will run on http://localhost:5000.

6. Run the Frontend App
Now, go to the client directory and run the frontend:

bash
Copy
Edit
cd ../client
npm run dev
The frontend will run on http://localhost:5173.

Troubleshooting
Error: MongoDB not connected: Make sure your MongoDB URI is correct in .env.

Frontend not loading: Ensure the Vite development server is running without errors.

Deployment
For deployment:

Frontend: Deploy the client folder to Vercel.

Backend: Deploy the server folder to Render or any other Node.js hosting provider.

License
This project is licensed under the MIT License.
