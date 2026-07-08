# 🎓 LMS Certifications: AI-Powered Learning Management System

![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-MERN_Stack-blue?style=for-the-badge)
![Frontend](https://img.shields.io/badge/Frontend-React_+_Vite-61DAFB?style=for-the-badge)
![Backend](https://img.shields.io/badge/Backend-Node.js_+_Express-339933?style=for-the-badge)
![Database](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge)
![Authentication](https://img.shields.io/badge/Auth-Firebase_+_JWT-orange?style=for-the-badge)
![Payments](https://img.shields.io/badge/Payments-Razorpay-0C7B93?style=for-the-badge)
![AI](https://img.shields.io/badge/AI-Google_Gemini-purple?style=for-the-badge)

> **🚀 LMS Certifications** is a modern, full-stack Learning Management System (LMS) engineered using the **MERN Stack**. The platform enables seamless online learning through secure authentication, AI-powered assistance, digital course management, online payments, instructor dashboards, student progress tracking, and responsive user experiences.

🔗 **Live Demo:** https://lms-1-a2e5.onrender.com

---

# ⚡ System Architecture & Engineering Highlights

LMS Certifications is designed as a scalable full-stack educational platform where students can explore courses, instructors can manage educational content, and administrators can efficiently handle the learning ecosystem.

The architecture focuses on secure authentication, modular backend APIs, cloud media storage, payment processing, and AI-assisted learning while maintaining clean separation between frontend and backend services.

---

# 🏗️ Architecture Overview

```
                     ┌──────────────────────────────┐
                     │      React + Vite Frontend   │
                     │    (Redux + Tailwind CSS)    │
                     └──────────────┬───────────────┘
                                    │
                          REST API Requests
                                    │
                     ┌──────────────▼───────────────┐
                     │      Express.js Backend      │
                     │ Authentication │ Courses │ AI│
                     └──────────────┬───────────────┘
                                    │
      ┌───────────────┬─────────────┼───────────────┬──────────────┐
      │               │             │               │              │
      ▼               ▼             ▼               ▼              ▼
 MongoDB        Firebase Auth   Razorpay      Cloudinary     Google Gemini
(Database)      (Google Login)  Payments      Image Upload      AI APIs
```

---

# 🚀 Engineering Highlights

## 🔐 Secure Authentication System

The authentication layer combines **Firebase Authentication** with **JWT-based authorization** to provide secure access across the platform.

### Features

- Email & Password Authentication
- Google Sign-In using Firebase
- JWT Authentication
- Protected Routes
- Persistent User Sessions
- Secure Cookie Handling

---

## 📚 Comprehensive Course Management

The platform provides a complete learning workflow for both students and instructors.

### Student Features

- Browse Courses
- Purchase Courses
- Track Learning Progress
- View Enrolled Courses
- Course Reviews & Ratings

### Instructor Features

- Create New Courses
- Edit Existing Courses
- Upload Course Images
- Manage Published Courses
- Monitor Student Enrollments

---

## 🤖 AI-Powered Learning Assistant

The application integrates **Google Gemini AI** to improve the learning experience.

### AI Capabilities

- Answer student learning queries
- Explain difficult concepts
- Provide educational assistance
- Generate intelligent responses
- Improve overall learning efficiency

---

## 💳 Secure Payment Integration

Course purchases are powered through **Razorpay Payment Gateway**.

### Payment Workflow

- Secure Checkout
- Payment Verification
- Enrollment After Successful Payment
- Protected Purchase APIs

This ensures a reliable payment experience while maintaining secure transaction processing.

---

## ☁️ Cloud Media Management

Course images are managed using **Cloudinary**.

### Benefits

- Cloud Image Storage
- Optimized Image Delivery
- Faster Loading
- Reduced Server Storage
- Easy Image Management

---

## 📊 Interactive Dashboard

Dedicated dashboards improve usability for different user roles.

### Student Dashboard

- My Courses
- Learning Progress
- Profile Management
- Purchased Courses

### Instructor Dashboard

- Course Management
- Student Information
- Revenue Overview
- Analytics & Reports

---

## 🎨 Modern Responsive UI

The frontend is developed using **React**, **Vite**, and **Tailwind CSS**.

### Highlights

- Responsive Design
- Mobile Friendly
- Fast Page Loading
- Clean User Interface
- Smooth Navigation
- Modern Component-Based Architecture

---

# ✨ Core Features

- 🔐 Firebase Authentication
- 🌐 Google Sign-In
- 🎓 Learning Management System
- 📚 Course Enrollment
- 👨‍🏫 Instructor Dashboard
- 👨‍🎓 Student Dashboard
- 🤖 Google Gemini AI Integration
- 💳 Razorpay Payment Gateway
- ☁️ Cloudinary Image Upload
- 📊 Interactive Analytics
- ⭐ Course Reviews & Ratings
- 🔍 Course Search
- 📱 Fully Responsive Design
- 🔒 JWT Authentication
- ⚡ RESTful APIs
- 🎨 Tailwind CSS UI
- 📈 Scalable MERN Architecture

---

# 🎯 Project Goals

The primary objective of LMS Certifications is to provide a complete online learning ecosystem where:

- Students can easily discover and enroll in courses.
- Instructors can efficiently create and manage educational content.
- Learning becomes more interactive with AI-powered assistance.
- Secure authentication protects user data.
- Payments are processed safely using Razorpay.
- Cloud services optimize media management.
- The application remains scalable, responsive, and production-ready.

---

---

# 🛠️ Complete Tech Stack

## 🎨 Frontend Technologies

| Technology | Purpose |
|------------|---------|
| **React.js** | Building reusable UI components |
| **Vite** | Lightning-fast frontend bundler |
| **Redux Toolkit** | Global state management |
| **React Router DOM** | Client-side routing |
| **Tailwind CSS** | Responsive UI styling |
| **Axios** | API communication |
| **Firebase Authentication** | Google Login & Authentication |
| **Recharts** | Dashboard analytics & visualizations |
| **React Hot Toast** | Beautiful notifications |
| **Lucide React** | Modern icon library |

---

## ⚙️ Backend Technologies

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | REST API development |
| **MongoDB** | NoSQL Database |
| **Mongoose** | MongoDB ODM |
| **JWT** | User Authentication |
| **Cookie Parser** | Secure Cookie Handling |
| **Multer** | File Upload Handling |
| **Cloudinary** | Cloud Image Storage |
| **Google Gemini AI** | AI-powered learning assistance |
| **Razorpay** | Online Payment Gateway |
| **Nodemailer** | Email Services |
| **dotenv** | Environment Variable Management |

---

# 📂 Project Structure

```
LMS/
│
├── backend/
│   │
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── utils/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# 🚀 Key Modules

## 🔐 Authentication Module

- User Registration
- User Login
- Google Authentication
- JWT Authorization
- Protected Routes
- Secure Cookies

---

## 🎓 Course Module

- Browse Courses
- Course Details
- Course Enrollment
- Instructor Course Management
- Course Publishing
- Course Reviews

---

## 🤖 AI Module

- Google Gemini Integration
- AI Learning Assistant
- Educational Query Resolution
- Smart Responses

---

## 💳 Payment Module

- Razorpay Checkout
- Secure Payment Processing
- Course Purchase
- Enrollment Verification

---

## ☁️ Media Module

- Cloudinary Integration
- Course Thumbnail Upload
- Optimized Image Delivery
- Secure Media Storage

---

## 📈 Dashboard Module

### 👨‍🎓 Student Dashboard

- My Courses
- Learning Progress
- Profile Management
- Purchased Courses

### 👨‍🏫 Instructor Dashboard

- Create Courses
- Edit Courses
- Manage Students
- Revenue Dashboard

---

# 📸 Application Screenshots

> Replace these images with actual screenshots after uploading them.

## 🏠 Home Page

```
screenshots/home.png
```

---

## 🔐 Authentication

```
screenshots/login.png
```

---

## 📚 All Courses

```
screenshots/courses.png
```

---

## 🎓 Course Details

```
screenshots/course-details.png
```

---

## 🤖 AI Assistant

```
screenshots/ai-assistant.png
```

---

## 👨‍🏫 Instructor Dashboard

```
screenshots/instructor-dashboard.png
```

---

## 👨‍🎓 Student Dashboard

```
screenshots/student-dashboard.png
```

---

## 💳 Razorpay Checkout

```
screenshots/payment.png
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/DiVyansh-Gt/LMS.git
```

```bash
cd LMS
```

---

## 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

# 🔐 Environment Variables

## 📁 Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

RAZORPAY_KEY_ID=your_key

RAZORPAY_SECRET_KEY=your_secret

GEMINI_API_KEY=your_api_key

EMAIL=your_email

EMAIL_PASSWORD=your_password
```

---

## 📁 Frontend (.env)

```env
VITE_BACKEND_URL=http://localhost:5000

VITE_FIREBASE_API_KEY=your_key

VITE_FIREBASE_AUTH_DOMAIN=your_domain

VITE_FIREBASE_PROJECT_ID=your_project

VITE_FIREBASE_STORAGE_BUCKET=your_bucket

VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id

VITE_FIREBASE_APP_ID=your_app_id

VITE_RAZORPAY_KEY=your_key
```

---

# ▶️ Run Locally

## Backend

```bash
cd backend

npm run dev
```

---

## Frontend

```bash
cd frontend

npm run dev
```

---

The application will start on:

```
Frontend → http://localhost:5173

Backend → http://localhost:5000
```

---

# 🌍 Live Deployment

### Frontend

```
https://lms-1-a2e5.onrender.com
```

### Backend

```
https://lms-0jwq.onrender.com
```

---

---

# 🔌 REST API Overview

The backend follows a modular REST architecture where every major functionality is separated into dedicated API routes.

## 🔐 Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/logout` | Logout user |
| POST | `/api/auth/google` | Google Authentication |
| GET | `/api/auth/profile` | Fetch authenticated user |

---

## 👤 User APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/user/currentuser` | Get current user |
| PUT | `/api/user/update` | Update user profile |
| GET | `/api/user/enrolled-courses` | Get enrolled courses |

---

## 📚 Course APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/course/all` | Fetch all courses |
| GET | `/api/course/:id` | Course details |
| POST | `/api/course/create` | Create new course |
| PUT | `/api/course/update/:id` | Update course |
| DELETE | `/api/course/delete/:id` | Delete course |

---

## 🤖 AI APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/ai/chat` | AI-powered learning assistant |

---

## 💳 Payment APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/payment/create-order` | Create Razorpay order |
| POST | `/api/payment/verify` | Verify payment |

---

## ⭐ Review APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/review/all` | Get all reviews |
| POST | `/api/review/add` | Add review |

---

# 🔐 Authentication Flow

```
User
   │
   ▼
Login / Signup
   │
   ▼
Firebase Authentication
   │
   ▼
Backend Verification
   │
   ▼
JWT Generation
   │
   ▼
HTTP Only Cookie
   │
   ▼
Protected APIs
```

---

# 💳 Payment Flow

```
Student

    │

    ▼

Select Course

    │

    ▼

Create Razorpay Order

    │

    ▼

Razorpay Checkout

    │

    ▼

Payment Verification

    │

    ▼

Course Enrollment

    │

    ▼

Access Granted
```

---

# ☁️ Image Upload Flow

```
Instructor

    │

    ▼

Upload Thumbnail

    │

    ▼

Multer

    │

    ▼

Cloudinary

    │

    ▼

Image URL

    │

    ▼

MongoDB

    │

    ▼

Displayed in Course
```

---

# 🤖 AI Assistant Flow

```
Student Question

       │

       ▼

Frontend

       │

       ▼

Express API

       │

       ▼

Google Gemini AI

       │

       ▼

Generated Response

       │

       ▼

Student
```

---

# 📈 Performance Highlights

- ⚡ Fast frontend powered by Vite
- 📦 Modular REST API architecture
- 🔒 JWT-based secure authentication
- ☁️ Cloudinary optimized media delivery
- 💳 Secure Razorpay payment processing
- 🤖 Google Gemini AI integration
- 📱 Responsive UI across devices
- ⚙️ Component-based React architecture
- 📊 Redux Toolkit for efficient state management

---

# 🚀 Future Enhancements

The following features are planned for future releases.

- 🎥 Live Classes
- 💬 Real-Time Chat
- 📹 Video Streaming
- 📜 PDF Certificate Generation
- 📊 Advanced Analytics
- 🏆 Leaderboard System
- 🎯 Personalized Course Recommendations
- 🌙 Dark Mode
- 🔔 Push Notifications
- 📱 Progressive Web App (PWA)
- 🌍 Multi-language Support
- 🧠 AI Course Recommendation System

---

# 🧪 Testing

### Frontend

```bash
npm run dev
```

### Backend

```bash
npm run dev
```

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to improve LMS Certifications, please follow these steps:

1. Fork the repository

2. Create a new feature branch

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes

```bash
git commit -m "Add New Feature"
```

4. Push the branch

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project for educational purposes.

---

# 👨‍💻 Author

<div align="center">

# **Divyansh Gupta**

**Full Stack MERN Developer**

Learning • Building • Deploying • Scaling

[![GitHub](https://img.shields.io/badge/GitHub-DiVyansh--Gt-black?style=for-the-badge&logo=github)](https://github.com/DiVyansh-Gt)

<br>

⭐ If you like this project, don't forget to **Star** the repository.

Made with ❤️ using React, Node.js, Express, MongoDB & AI.

</div>

---

# ⭐ Support

If you found this project helpful,

🌟 Star this repository

🍴 Fork the repository

📢 Share it with others

Happy Coding 🚀
