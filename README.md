Job Portal System

Overview

The Job Portal System is a full-stack web application designed to bridge the gap between recruiters and job seekers. It provides a platform where recruiters can post job listings, manage applications, and find suitable candidates, while job seekers can browse job opportunities and apply for roles directly.

Features

For Job Seekers:

View all available job listings.

Search for jobs by keywords or filters.

View detailed descriptions of jobs.

Apply to jobs by submitting personal details and uploading a resume.

For Recruiters:

Register and log in to the platform.

Post new job listings.

Edit and delete existing job postings.

View applicants for each job listing.

Additional Features:

Authentication: Secure login and session management for recruiters.

File Upload: Resume uploads stored on the server.

Email Notifications: Confirmation emails sent to applicants upon successful application.

Error Handling: Custom error pages for seamless user experience.

Technology Stack

Frontend: EJS (Embedded JavaScript templates), HTML, CSS

Backend: Node.js with Express.js

Templating: EJS for dynamic HTML generation

Session Management: Express sessions

File Handling: Multer for file uploads

Database: In-memory storage for simplicity

Architecture

The application follows the Model-View-Controller (MVC) architecture:

Model: Handles data storage and business logic.

View: Provides dynamic rendering using EJS templates.

Controller: Manages routing and application logic.



Installation

Prerequisites:

Node.js and npm installed on your system.

Steps:

Clone the repository:

git clone https://github.com/Sudhanshu593/Job-Portal-System.git

Navigate to the project directory:

cd Job-Portal-System

Install dependencies:

npm install

Start the server:

node server.js

Open your browser and navigate to http://localhost:3000.


Folder Structure

Job-Portal-System/
├── public/                # Static files (CSS, JS, Resumes)
├── views/                 # EJS templates
├── models/                # Application models (Recruiter, Jobs, Applicants)
├── controllers/           # Route handling logic
├── middleware/            # Custom middleware (auth, file uploads)
├── server.js              # Main server file
└── package.json           # Project dependencies and scripts

API Endpoints

Auth Routes:

POST /register - Register a recruiter account.

POST /login - Log in as a recruiter.

POST /logout - Log out the recruiter.

Job Routes:

GET /jobs - Retrieve all job listings.

POST /jobs - Create a new job listing.

GET /jobs/:id - Retrieve a specific job listing.

PUT /jobs/:id - Update a job listing.

DELETE /jobs/:id - Delete a job listing.

POST /apply/:id - Apply to a specific job.

Future Scope

Integration with a database like MongoDB or MySQL.

Advanced search and filter options for job seekers.

Recruiter dashboard with analytics.

Role-based access control for different types of users.

Deployment enhancements for scalability and performance.


Feel free to contribute and enhance the project!
