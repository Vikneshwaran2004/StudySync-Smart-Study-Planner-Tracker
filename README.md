# StudySync-Smart-Study-Planner-Tracker
StudySync is a full-stack web application designed to help students organize, schedule, and track their study sessions effectively.
# 📚 StudySync – Smart Study Planner & Tracker

**StudySync** is a smart full-stack study management app that helps students create, track, and optimize their study routines. It combines personalized planning, real-time tracking, and insightful analytics to build better study habits.

---

## 🧭 Table of Contents

- [🔍 Overview](#-overview)
- [🚀 Features](#-features)
- [🧱 Tech Stack](#-tech-stack)
- [📁 Folder Structure](#-folder-structure)
- [⚙️ Setup Instructions](#️-setup-instructions)
- [🌐 Environment Variables](#-environment-variables)
- [📡 API Overview](#-api-overview)
- [🖼️ Screenshots](#-screenshots)
- [📦 Deployment](#-deployment)
- [🧠 Future Improvements](#-future-improvements)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## 🔍 Overview

**StudySync** was built to solve a common student problem: inconsistent study habits and disorganized learning schedules. The app allows students to create structured study plans, track completed tasks, visualize progress, and stay consistent with streaks and reminders.

---

## 🚀 Features

- 🔐 **User Authentication** – Register/Login with JWT
- 📝 **Task Planner** – Add, update, and delete study tasks
- 📅 **Calendar View** – Organize study sessions visually
- 📊 **Analytics Dashboard** – Track progress by subject and study hours
- ⏰ **Reminders** – Notifications for upcoming/overdue tasks
- 🤖 **AI Assistant** *(Optional)* – Get smart study suggestions using OpenAI
- 🌗 **Responsive UI** – Mobile-first clean interface with dark/light modes

---

## 🧱 Tech Stack

| Layer      | Tech                     |
|------------|--------------------------|
| Frontend   | React.js, Tailwind CSS   |
| Backend    | Node.js, Express.js      |
| Database   | MongoDB + Mongoose       |
| Auth       | JWT, bcrypt              |
| AI (opt.)  | OpenAI API               |
| Deployment | Vercel (FE), Render (BE) |

---

## 📁 Folder Structure

studysync/
├── client/ # React frontend
│ ├── components/
│ ├── pages/
│ └── App.jsx
├── server/ # Node.js backend
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── .env.example
│ └── index.js
