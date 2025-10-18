Frontend Wizards — Stage 0 Task: Profile Card

This is a responsive, accessible, and testable Profile Card built using semantic HTML, modern CSS, and vanilla JavaScript.  
It fulfills all requirements for the **Frontend Wizards Stage 0** task.


 Project Overview

The Profile Card displays user information such as:
-  Name
-  Short biography
-  Current time ( milliseconds)
-  Avatar image
-  Social links (GitHub, LinkedIn, Twitter/X)
-  Hobbies
-  Dislikes

Every visible element is assigned a unique `data-testid` attribute to support automated testing.


 Folder Structure

frontend-wizards-profile-card
│
├── image.jpg # User avatar image
├── index.html # Main HTML structure
├── README.md # Project documentation
├── script.js # Live time functionality
└── style.css # Styling and responsiveness



 Live Demo

- GitHub Repository: [https://github.com/favourite2024/frontend-wizards-profile-card](https://github.com/favourite2024/frontend-wizards-profile-card)
- Live Site (GitHub Pages / Netlify): https://YOUR-LIVE-LINK



   Key Features

 ✅ Semantic & Accessible HTML
- Uses `<article>`, `<section>`, `<figure>`, `<ul>`, `<li>`, and `<img>` for structure and accessibility.  
- Each visual element has a corresponding `data-testid` for testing.

 Modern UI with CSS
- Gradient background (`#667eea → #764ba2`)  
- Soft card shadow and hover animation  
- Circular avatar with white border  
- Clean layout using **CSS Grid** and Flexbox 
- Fully responsive on mobile and desktop

 Dynamic JavaScript Time
The current time updates in real-time using:
 javascript
function updateTime() {
  const el = document.getElementById("time");
  el.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);
Displays accurate milliseconds and refreshes every second.

 Interactive Social Icons
Each social media link:

Opens in a new tab (target="_blank")

Uses rel="noopener noreferrer" for security

Features hover transitions and accessible focus states

  Data Test IDs
All required test IDs are included for automated testing:

Element	Test ID
Profile Card	test-profile-card
User Name	test-user-name
Biography	test-user-bio
Current Time	test-user-time
Avatar	test-user-avatar
Social Links Wrapper	test-user-social-links
GitHub Link	test-user-social-github
LinkedIn Link	test-user-social-linkedin
Twitter/X Link	test-user-social-twitter
Hobbies List	test-user-hobbies
Dislikes List	test-user-dislikes

   Responsiveness
The design adapts across all screen sizes.

On mobile, sections stack vertically.

On wider screens, the layout remains centered and card-like.

The avatar and typography scale proportionally for readability.

  How to Run Locally
Clone this repository:

bash
Copy code
git clone https://github.com/YOUR-USERNAME/frontend-wizards-profile-card.git
Open the folder:

bash
Copy code
cd frontend-wizards-profile-card
Run the project by opening index.html in your browser.

No additional setup or installation required.

  Technologies Used
HTML5 — semantic structure

CSS3 — gradient backgrounds, shadows, flexbox, and grid

JavaScript (ES6) — real-time time update

Font Awesome 6.5.0 — icons for GitHub, LinkedIn, and Twitter/X

   Author
Favour Onyinyechi Udeh
Frontend Developer passionate about crafting accessible, responsive, and human-centered digital experiences.

  License
This project is open source and available under the MIT License.