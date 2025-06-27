# 🏠 Roommate Finder Website

A full-stack web application designed to help users find compatible roommates based on location, budget, lifestyle preferences, and interests. Users can sign up, create listings, search, and interact with (roommate posts).

### 🔗 Live Site

[👉 Visit Live Website]  https://roommate-app-a4ed0.web.app/

[Backend git ripo]  https://github.com/mahin67580/roommate-finder-app-backend

### 🔗 Web Site Name

[👉  Grab Roommate]   

---

## 🚀 Features

- 🔐 **Authentication with Firebase** (Email/Password + Google Sign-In)
- 📃 **Full CRUD Operations** (Add, Browse, Update, Delete Roommate Listings)
- 🌐 **Responsive Design** for mobile, Laptop, and desktop devices
- 📍 **Dynamic Filtering** of roommate posts with meaningful data (no Lorem Ipsum)
- 🌙 **Dark/Light Mode Toggle**, Lottie animations,React-tooltip
- 👍 **Like Functionality** (with live count, contact reveal, and self-like prevention)
- 🔁 **Persistent Protected Routes** — no redirect to login upon refresh

---
🌟 Enhanced Features (New Additions)
📊 Dashboard Analytics
Interactive Stats Dashboard with real-time data visualization

Recharts integration for beautiful data representation

Key metrics:

Total listings count

Active/available listings

Total likes across all posts

Average rent price analysis

Listings distribution by location

🖥️ Enhanced UI Components
Modern Dashboard Layout with sidebar navigation

Animated loading states across all components

Improved mobile responsiveness for all pages

Theme-consistent components with dark/light mode support

🔍 Advanced Search & Filtering
Comprehensive search by title and location

Advanced filters:

Rent price range (min/max)

Location-specific filtering

Availability status

Real-time results updating as filters change

📈 Data Visualization
Listings by location bar chart

Interactive tooltips on charts

Responsive charts that adapt to screen size

Quick stats cards with relevant icons

🛠️ Updated Tech Stack
Frontend Enhancements

Recharts for data visualization

Framer Motion for advanced animations

Enhanced React Icons library usage

Improved responsive design with Tailwind

Backend Improvements

Optimized API endpoints

Better data aggregation for analytics

Improved error handling

🚀 Key Implementations (Updated)
📊 Dashboard System
User-specific dashboard with:

Quick action buttons

Visual data representations

Personalized statistics

Protected admin views with relevant analytics

🔄 Enhanced CRUD Operations
Smoother state management during create/update/delete

Optimized data fetching with loading states

Better error handling and user feedback

📱 Mobile-First Design
Dual display modes (cards for mobile, tables for desktop)

Touch-friendly interfaces

Adaptive component sizing

--
## 🛠️ Tech Stack

**Frontend**  
React, React Router, TailwindCSS, DaisyUI, Firebase Auth, Lottie-React,  React Tooltip, SweetAlert2

**Backend**  
Node.js, Express.js, MongoDB, dotenv, CORS

---
🌐 Deployment Notes
Frontend: Hosted on Firebase Hosting

Backend: Deployed on Vercel

Database: MongoDB Atlas cluster 

--- 

## ✅ Key Implementations

### 🧭 Routing & Layout

- Header with Logo and conditional Nav Links (`Home`, `Browse Listings`, `Add Listing`, `My Listings`, `Login`, `Signup`)
- Footer with Terms, Contact Info, and Social Media Links
- 404 Not Found Page and Loading Spinners
- All routes designed with protected route logic and persistence on reload

### 🏡 Home Page

- Banner slider with meaningful call-to-action slides
- Featured Roommates section (6 posts dynamically loaded via MongoDB `.limit()`)
- Two extra sections with engaging and relevant content
- Dark/Light theme toggle

### 🔐 Auth

- Firebase Auth with:
  - Email/Password login
  - Google login
  - Secure password requirements (uppercase, lowercase, 6+ characters)
- All success and error messages shown using SweetAlert2

### 🧾 Add / My Listings / Update / Delete

- Authenticated users can:
  - Create listings with all required fields
  - View only their own listings on "My Listings"
  - Update or delete posts with modals and confirmation alerts
- All user-specific fields (name & email) are read-only during form edits

### 📄 Browse Listings & Details

- Displays all posts from database
- Table view with `See More` to navigate to detailed view
- On Details Page:
  - Users can like others' posts (not their own)
  - Likes increase counter and reveal contact number
  - Like count shown dynamically: e.g., "5 people interested in this person"

---

## 🧪 Environment Variables

Sensitive information like Firebase Config and MongoDB URI are securely stored in `.env` files:

```env
VITE_FIREBASE_API_KEY=xxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx
 
```

---
🚀 Local Development Setup
Prerequisites
Node.js (v16 or higher)

npm (v8 or higher) or yarn

MongoDB Atlas account (or local MongoDB instance)

Firebase project for authentication

🛠️ Installation Steps
Clone the repositories

bash
git clone https://github.com/mahin67580/roommate-finder-app-frontend.git
git clone https://github.com/mahin67580/roommate-finder-app-backend.git
Set up the backend

bash
cd roommate-finder-app-backend
npm install
Configure environment variables
Create a .env file in the backend root with:

env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
Start the backend server

bash
npm start
Set up the frontend

bash
cd ../roommate-finder-app-frontend
npm install
Configure frontend environment
Create a .env file in the frontend root with:

env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_API_BASE_URL=http://localhost:5000
Start the frontend development server

bash
npm run dev
Access the application
Open your browser and visit:

text
http://localhost:5173

 

> **Made with ❤️ by [Afzal Hossain Mahin]**
