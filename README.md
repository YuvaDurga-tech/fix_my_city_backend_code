🏙️ Fix My City

This is Backend part of our app

A modern, full-stack web application that empowers citizens to report, track, and resolve civic issues. Users can submit complaints for problems like potholes and broken streetlights, while administrators can manage and update the status of these reports through a dedicated portal.

This project is built with a plain HTML, Tailwind CSS, and vanilla JavaScript client, powered by a robust Node.js and Express backend with a MongoDB database.

✨ Features

Role-Based Access: Separate views and logic for Citizens and Administrators.

Secure Authentication: Full user signup and login system using JSON Web Tokens (JWT).

Citizen Dashboard:

Register new complaints with a detailed form.

Pinpoint issue locations using an interactive Google Map (with search and drag-and-drop).

Use Geolocation to find the user's current location.

View a personal dashboard with stats and recent activity.

Admin Dashboard:

View all submitted complaints in a protected, sortable table.

Update the status of any complaint (Pending, In Progress, Resolved).

Public Dashboard: A global view showing all reports on a map, recent stats, and top contributors.

AI Chatbot: An integrated Gemini AI chatbot (powered by the backend) to answer user questions.

Persistent Data: All complaints and user data are stored in a MongoDB database.

Fully Responsive: Clean and modern UI built with Tailwind CSS, works on all device sizes.

🛠️ Tech Stack

Client: HTML5, Tailwind CSS, Vanilla JavaScript (ES6+)

Backend: Node.js, Express.js

Database: MongoDB (with Mongoose)

APIs & Services:

Google Maps API: For interactive maps (client-side).

Google Gemini AI: For the intelligent chatbot assistant (called from backend).

JSON Web Tokens (JWT): For secure user authentication.
