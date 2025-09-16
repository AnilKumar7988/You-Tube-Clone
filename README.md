# 📺 YouTube Clone Project  

This project is a **Full-stack YouTube clone application** built with **React (Vite, Tailwind CSS)** for the frontend and **Node.js, Express.js, and MongoDB** for the backend.  

It provides a modern, responsive, and feature-rich video streaming platform where users can browse videos, play content, interact through likes, dislikes, and comments, as well as create their own channels.  

---

## 🚀 Frontend  

### 🛠️ Technologies Used  
- **HTML5**  
- **Tailwind CSS**  
- **JavaScript (ES6+)**  
- **React (with Vite)**  
- **React Icons Library**  

---

### ⚡ Commands to Setup Frontend  

```bash
# Create React project with Vite
npm create vite@latest

# Enter project name
Project name: … my-react-app

# Select framework
✔ Select a framework: › React

# Select variant
✔ Select a variant: › JavaScript 

# Navigate into project
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev


📂 Project Structure & Key Components
main.jsx

Entry point of the React application.

Wraps the entire app inside React.StrictMode.

Renders the root <App /> component.

App.jsx

Root component responsible for defining routes and rendering pages.

Central hub for navigation between Home, Video Player, Channel, and Details pages.

Navbar.jsx

Fixed at the top of the page.

Contains:

Hamburger menu (toggles the sidebar).

Search input field (filters videos by keyword like music, movies, etc.).

"Create Channel" option.

"Create Account" option.

SideNavbar.jsx

Collapsible sidebar toggled by clicking the hamburger icon.

Contains navigation links (only Home is functional; others are static).

Clicking on Home navigates back to the Homepage.

HomePage.jsx

Displays a collection of video cards (fetched from database/dummy data).

Each card is clickable → opens the VideoPlayerPage for detailed viewing.

VideoPlayerPage.jsx

Displays a selected video in large format.

Shows metadata: title, author, subscribers, likes, dislikes, comments.

Allows logged-in users to:

Post comments.

Edit/delete only their own comments.

Suggested videos appear on the right side.

ChannelPage.jsx

Contains a channel creation form.

Shows logged-in user’s username and channel name.

ChannelDetailsPage.jsx

Displays dummy videos associated with a specific channel.

Shows channel name and user details.

📌 Icons across the app are powered by React Icons Library.


🖥 Backend
🛠️ Technologies Used

Node.js

Express.js

MongoDB (via Mongoose)

⚡ Commands to Setup Backend
# Initialize project
npm init -y

# Install dependencies
npm install express mongoose

# Install dev dependency
npm install --save-dev nodemon

# Start server with nodemon
nodemon index.js



📂 Backend Structure & Key Components
index.js (or server.js)

Entry point of the backend server.

Connects to MongoDB.

Initializes Express server.

Handles routing and middleware setup.

Folders

Controllers → Handle business logic for routes.

Middleware → Authentication, request validation, and error handling.

Models → Define database schemas using Mongoose.

Routes → Define API endpoints (user, video, channel, etc.).

Key Files

backendDummydata.js → Contains dummy video data displayed on the frontend (Homepage).

UserSchema.js → Defines schema for user data (username, email, password, etc.).

Video.js → Defines schema for videos (title, type, author, subscribers, likes, dislikes, comments, channel logo, etc.). 

✨ Features

Responsive Design – Works seamlessly on desktop, tablet, and mobile devices.

Homepage – Displays video cards with clickable previews.

Video Player Page –

Watch videos in large format.

View details (title, author, likes, dislikes, comments).

Suggested videos on the right side.

Authentication – Users can sign up and log in.

Comment System –

Only logged-in users can post comments.

Users can edit/delete only their own comments.

Search Functionality – Filter videos by category (e.g., music, movies).

Channel Creation – Logged-in users can create their own channel.

Channel Details Page – Displays dummy videos, channel name, and user details.  

⚠️ Important Note

➡️ Run frontend and backend separately.
➡️ The project works properly when both servers are running.

🔗 GitHub Repository

YouTube Clone – GitHub Link