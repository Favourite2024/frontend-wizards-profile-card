Frontend Wizards - Stage 0: Profile Card

This project is a responsive, accessible, and testable Profile Card built using semantic HTML, modern CSS, and vanilla JavaScript. 
It fulfills all requirements for the Frontend Wizards Stage 0 challenge.

-------------------------------------------------------------------

Live Project
-------------
Live Site (Netlify): https://favourprofile.netlify.app
GitHub Repository: https://github.com/Favourite2024/frontend-wizards-profile-card

-------------------------------------------------------------------

Project Overview
----------------
This profile card displays the following:

- Name and biography
- Avatar image
- Current time (in milliseconds)
- Hobbies list
- Dislikes list
- Social icons (GitHub, LinkedIn, Twitter/X)

All visible elements include data-testid attributes for automated testing.

-------------------------------------------------------------------

Folder Structure
----------------
frontend-wizards-profile-card/
│
├── image.jpg       (Profile avatar)
├── index.html      (Semantic HTML structure)
├── README.md       (Documentation)
├── script.js       (Real-time clock functionality)
└── style.css       (Styling and responsiveness)

-------------------------------------------------------------------

Features
--------
- Semantic HTML structure using article, section, ul, li, and headings.
- Responsive design implemented with CSS Grid and Flexbox.
- Gradient header with soft card shadows.
- Animated avatar hover effect.
- Accessible social icons using Font Awesome.
- Keyboard-friendly links with visible focus styles.
- Real-time clock using Date.now() and setInterval().

-------------------------------------------------------------------

Data Test IDs
-------------
Profile Card ..................... test-profile-card
User Name ........................ test-user-name
Biography ........................ test-user-bio
Current Time ..................... test-user-time
Avatar ........................... test-user-avatar
Social Links Container ........... test-user-social-links
GitHub Link ...................... test-user-social-github
LinkedIn Link .................... test-user-social-linkedin
Twitter Link ..................... test-user-social-twitter
Hobbies List ..................... test-user-hobbies
Dislikes List .................... test-user-dislikes

-------------------------------------------------------------------

Run Locally
-----------
1. Clone the repository:
   git clone https://github.com/Favourite2024/frontend-wizards-profile-card.git

2. Open the project folder:
   cd frontend-wizards-profile-card

3. Run the project:
   Open index.html in your web browser.

No installation or build tools are required.

-------------------------------------------------------------------

Technologies Used
-----------------
HTML5
CSS3 (Grid, Flexbox, Gradients, Transitions)
JavaScript (ES6)
Font Awesome 6.5.0

-------------------------------------------------------------------

Notes
-----
- The current time updates dynamically every second using Date.now().
- All required data-testid attributes are present as per project guidelines.
- The layout adapts smoothly to all screen sizes (mobile, tablet, desktop).

-------------------------------------------------------------------

Author
------
Favour Onyinyechi Udeh
Frontend Developer focused on building accessible, responsive, and user-friendly web experiences.

-------------------------------------------------------------------

License
-------
This project is licensed under the MIT License.