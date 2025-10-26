JobShala - Full-Stack MERN Application
This is a full-stack Job Portal web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It serves as a comprehensive platform connecting job seekers (Students) with employers (Recruiters), allowing for seamless job posting, application, and management.
The application features a complete authentication system using JWT, role-based access control, and a modern, responsive UI built with React, Tailwind CSS, and ShadCN.

Features
1. General Features
Role-Based Authentication: Secure signup and login for two distinct roles: Student (Candidate) and Recruiter (Client).

Protected Routes: JWT-based authentication ensures that users can only access pages and actions appropriate for their role.

Responsive Design: Fully responsive interface built with Tailwind CSS and ShadCN for a seamless experience on all devices.

2. Student (Candidate) Features
Authentication: Securely sign up and log in as a student.

Job Dashboard: View all recent job postings on the home page.

Filter & Search: Filter jobs based on criteria like job role.

Job Details: Click on any job to view a detailed description, company info, and requirements.

Apply for Jobs: Easily apply for jobs from the details page.

Profile Management:

Update personal profile information.

Upload and update a resume (powered by Cloudinary).

Application Tracking: View a list of all applied jobs and their current status (e.g., Pending, Accepted, Rejected).

3. Recruiter (Client) Features
Authentication: Securely log in as a recruiter.

Company Management:
Register one or more company profiles.
View a list of all registered companies on the recruiter dashboard.
Update existing company details.
Job Management:
Post new job openings using a detailed form.
View all jobs posted by the recruiter, organized by company and role.

Applicant Management:
Click on a job to see a list of all candidates who have applied.
View individual candidate profiles and details.
Access and view candidate resumes.
Accept or Reject applications, which updates the status on the candidate's end.

Tech Stack
Backend
1.Runtime: Node.js

2.Framework: Express.js

3.Database: MongoDB (with Mongoose)

4.Authentication: JSON Web Tokens (JWT)

5.File Storage: Cloudinary (for resume uploads)

Frontend
1.Library: React.js

2.State Management: Redux

3.Styling: Tailwind CSS

4.UI Components: ShadCN
