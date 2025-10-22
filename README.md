Frontend Wizards – Stage 0: Profile Card

This project is a responsive, accessible, and testable Profile Card built using semantic HTML, modern CSS, and vanilla JavaScript.
It fulfills all requirements for the Frontend Wizards Stage 0 challenge.

Live Project

Live Site (Netlify): https://favourprofile.netlify.app

GitHub Repository: https://github.com/Favourite2024/frontend-wizards-profile-card

Project Overview

This profile card displays the following:

Name and biography

Avatar image

Current time (in milliseconds)

Hobbies list

Dislikes list

Social icons (GitHub, LinkedIn, Twitter/X)

All visible elements include data-testid attributes for automated testing.

Folder Structure
frontend-wizards-profile-card/
│
├── image.jpg                  # Profile avatar
├── index.html                 # Profile Card (Stage 0)
├── style.css                  # Main styling file
├── script.js                  # Real-time clock script
├── README.md                  # Project documentation

Features

Semantic HTML structure using <article>, <section>, <ul>, <li>, and headings

Responsive design with CSS Grid and Flexbox

Gradient header and soft shadows for visual depth

Animated avatar hover effect

Accessible social icons (Font Awesome)

Keyboard-friendly navigation and visible focus styles

Real-time clock using Date.now() and setInterval()

Data Test IDs

Profile Card ..................... test-profile-card
User Name ........................ test-user-name
Biography ........................ test-user-bio
Current Time ..................... test-user-time
Avatar ........................... test-user-avatar
Social Links ..................... test-user-social-links
GitHub Link ...................... test-user-social-github
LinkedIn Link .................... test-user-social-linkedin
Twitter Link ..................... test-user-social-twitter
Hobbies List ..................... test-user-hobbies
Dislikes List .................... test-user-dislikes

Run Locally

Clone the repository:

git clone https://github.com/Favourite2024/frontend-wizards-profile-card.git


Navigate to the folder:

cd frontend-wizards-profile-card


Open index.html in your browser to view the project.

Technologies Used

HTML5

CSS3 (Grid, Flexbox, Transitions)

JavaScript (ES6)

Font Awesome 6.5.0

Notes

The current time updates dynamically every millisecond.

All data-testid attributes follow project testing standards.

Layout adapts seamlessly to mobile, tablet, and desktop devices.


Frontend Wizards – Stage 1: Multi-Page Application Update

This update builds on the Stage 0 Profile Card to form a multi-page application, adding two new pages — About Me and Contact Us — while improving accessibility, responsiveness, and structure.

Stage 1 Overview
1. About Me Page

A reflective page structured with semantic HTML that contains five main sections:

Section	Data-TestID
Bio	test-about-bio
Goals in this program	test-about-goals
Areas of low confidence	test-about-confidence
Note to future self	test-about-future-note
Extra thoughts	test-about-extra

All sections are wrapped inside <main data-testid="test-about-page"> and use proper headings (<h2>, <p>).
This page is responsive and consistent with the design system established in Stage 0.

2. Contact Us Page

A user-friendly contact form with client-side validation and accessibility support.

Validation Rules

All fields are required

Email must match name@example.com format

Message must contain at least 10 characters

Displays success message only when all validations pass

Data-TestIDs
Element	Data-TestID
Full Name	test-contact-name
Email	test-contact-email
Subject	test-contact-subject
Message	test-contact-message
Submit Button	test-contact-submit
Error Messages	test-contact-error-<field>
Success Message	test-contact-success
Accessibility

Every input has an associated <label for="">

Error messages connected via aria-describedby

Fully keyboard-navigable and screen-reader-friendly

Combined Folder Structure (Stage 0 → Stage 1)
frontend-wizards-profile-card/
│
├── image.jpg                        # Profile avatar
├── index.html                       # Stage 0 Profile Card
├── about.html                       # Stage 1 About Me page
├── contact.html                     # Stage 1 Contact Us page
├── style.css                        # Unified responsive styles
├── script.js                        # Real-time clock + form validation
├── README.md                        # Project documentation

Stage 1 JavaScript Enhancements

Input validation for required fields

Email format verification using regex

Minimum message length enforcement

Dynamic display of success and error states

Real-time feedback on blur and input events

Automatic form reset and smooth scroll to top on successful submission

Clean, modular validation functions for maintainability

Stage 1 Acceptance Criteria

Semantic HTML structure maintained throughout

Accessible form design with ARIA support

Fully responsive across all screen sizes

Proper data-testid attributes for automated testing

Clean and readable code organization

User feedback through visible error/success messages

Conclusion

This Stage 1 update extends the initial single-page profile card into a complete, multi-page portfolio experience.
It maintains visual consistency and accessibility while introducing structured reflection and interactivity through validated form handling.
The project now demonstrates a broader understanding of semantic HTML, responsive CSS, and functional JavaScript integration.

Author

Favour Onyinyechi Udeh
Frontend Developer focused on building accessible, responsive, and user-friendly web experiences.

License

Licensed under the MIT License.