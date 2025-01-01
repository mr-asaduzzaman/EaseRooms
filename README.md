# Hotel Booking Platform

A modern, fully responsive hotel booking platform that provides users with an engaging and seamless experience for discovering and booking hotel rooms. This project combines interactive design, robust functionality, and secure authentication to ensure a trustworthy and enjoyable platform for users.

## Purpose
The purpose of this project is to create a user-friendly and feature-rich platform for booking hotel rooms. It allows users to explore available rooms, view detailed information, manage their bookings, and post reviews, all within a secure and aesthetically pleasing interface.

## Live URL
[EaseRooms](https://ease-room.web.app)

## Key Features
- **Homepage Design:**
  - Interactive banner with a slider showcasing hotel highlights.
  - Map integration to display the hotel's location.
  - Featured rooms section with top-rated options and "Book Now" functionality.
  - User reviews carousel and special offers modal.
  - Additional sections for promotions and hotel highlights.

- **User Authentication:**
  - Email and password-based registration and login.
  - Google or GitHub-based social login.
  - Secure password validation with error messages for invalid entries.
  - Toast notifications for login, registration, and errors.

- **Navigation:**
  - Links to Rooms and My Bookings pages.
  - Private routes for authenticated users to access bookings and post reviews.

- **Rooms Page:**
  - Display all available rooms with images, prices, and descriptions.
  - Filter rooms by price range (server-side implementation).
  - Clicking a room card redirects users to the detailed room page.

- **Room Details Page:**
  - Comprehensive room information with reviews sorted by timestamp.
  - Booking modal with room summary and date selection.
  - Review posting feature for booked rooms.

- **My Bookings Page:**
  - Table view of rooms booked by the logged-in user.
  - Options to cancel bookings and update booking dates.

- **Additional Features:**
  - 404 Page with a creative design.
  - JWT authentication for secure API access.
  - Properly handled Firebase and MongoDB credentials using environment variables.
  - Responsive design for desktop, tablet, and mobile devices.

## NPM Packages Used
- **Frontend:**
  - `react`: For building the user interface.
  - `react-dom`: To render React components.
  - `react-router-dom`: For routing and navigation.
  - `tailwindcss`: For styling the application.
  - `daisyui`: For pre-styled UI components.
  - `framer-motion`: For animations.
  - `react-leaflet`: For map integration.
  - `react-toastify`: For toast notifications.
  - `react-datepicker`: For booking date selection.
  - `react-helmet`: For managing metadata and browser tab titles.

- **Backend:**
  - `express`: For building the server.
  - `mongoose`: For MongoDB interaction.
  - `dotenv`: For environment variable management.
  - `jsonwebtoken`: For JWT authentication.
  - `moment`: For date manipulation.
  - `cors`: For cross-origin resource sharing.
  - `bcryptjs`: For secure password hashing.

## Installation and Setup
### Prerequisites
- Node.js installed on your system
- MongoDB database setup
- Firebase project configuration

### Steps
1. Clone the repositories for the client and server.
2. Install dependencies using `npm install` in both directories.
3. Configure environment variables for Firebase and MongoDB.
4. Start the server using `npm start` or `nodemon`.
5. Start the client-side application using `npm start`.
6. Access the live platform at [EaseRooms](https://ease-room.web.app).

