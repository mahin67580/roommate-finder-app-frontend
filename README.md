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
## 🚀 Extra Features
- **Count Up animation in Home page** 
- **Accordion section with necessary questions in Home page** 
- **Used Lottie-React in Featured roommate as a visual impact and React Tooltip in Detains page in Like button to indicate Linking will reveal the contact number, ** 

--
## 🛠️ Tech Stack

**Frontend**  
React, React Router, TailwindCSS, DaisyUI, Firebase Auth, Lottie-React,  React Tooltip, SweetAlert2

**Backend**  
Node.js, Express.js, MongoDB, dotenv, CORS

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


## 📁 GitHub Commits

- ✅ **Client-side**: 15+ meaningful commits  
- ✅ **Server-side**: 8+ meaningful commits  

---


> **Made with ❤️ by [Afzal Hossain Mahin]**
