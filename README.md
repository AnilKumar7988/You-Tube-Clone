<!-- # Frontend
## (Language Used)
HTML, Tailwind Css, Javascript, React using Vite

## Commands to setup project
npm create vite@latest
Project name: … my-react-app
✔ Select a framework: › React
✔ Select a variant: › JavaScript / TypeScript
cd my-react-app
npm install
npm run dev


# Components 
Navbar.jsx - There is Navbar which is fixed at the top and have hamburger , search input field , create channel option, create account option.

SideNavbar.jsx - Sidenavbar is toggle when clicked on hamburger icon, in this only home link is working and all other are static. This home link send us to the Homepage component.

HomePage.jsx - On homepage there are default videos . These card are coming from database. If we click on the card then particular video will be open in the VideoplayerPage. 

VideoplayerPage.jsx - In this page a particular video is shown in big size on whichthe user has clicked. This page contains the details about the video like title,author,subscribers,comments,likes,dislikes. Also user can comment on this video . In the right side of this page there is a list of suggested videos. 

ChannelPage.jsx - This page contains a channel creation form . This contains the loginuser name and channelname of the user.

ChannelDetailspage.jsx - This page contains the dummy videos for the channel and the name of channel and user details. 
  
  ### I have used React Icon Library for icons.

# Backend

## Language Used
Node.js, Express.js , MongoDB

## Commands to setup backend 
npm init -y
npm install express mongoose
npm install nodemon
nodemon index.js

## Components 

I have used different folders acording to their usage. 

Controllers,Middleware,Models,Routes.

backendDummydata.js - There is the dummy data to show on UI. Basically the videos which are shown at the home page . These all data is here in this file.

UserSchema.js - There is the schema of user like username,email,password.

Video.js - there is schema about the video like there is title,type,author,subscribers,likes,dislikes,comments,channellogo etc.


# Features Of this Project
First of all there is home page. On home page we will find videos and a navbar and a side navbar . Sidenavbar is toggle when we click on hamburger icon. These videos are clickable when we click on the cards then a new page is open for that video and its details. There is login and sign up feture in this . Also, we can filter the video giving input inthe input field in the navbar. Like when we search music then only music video will be shown , if we search movie then only movie videos will be shown. There is create channel option also which open a form and in that form channel name is to be  given for making channel .

On the videoplayer page if any user is signed in then only he/she can post the comment. the comments are only edited by the user who post that comment , means any other user can not edit that comment. 

This project is fully responsive.

 -->



<!-- ------------------------------------------------------------------------------------------ -->

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



Project Structure & Key Components

main.jsx

The entry point of the React application.

Wraps the entire app inside React.StrictMode.

Renders the root <App /> component.

App.jsx

The root component responsible for defining routes and rendering pages.

Serves as the central hub for navigation between Home, Video Player, Channel, and Details pages.

Navbar.jsx

Fixed at the top of the page.

Contains:

Hamburger menu (toggles the sidebar).

Search input field (filters videos by keyword like music, movies, etc.).

"Create Channel" option.

"Create Account" option.

SideNavbar.jsx

A collapsible sidebar toggled by clicking the hamburger icon.

Contains navigation links (only Home is functional; other links are placeholders).

Clicking on "Home" navigates back to the Homepage.

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

📌 Icons throughout the app are powered by React Icons library.



🖥 Backend
Languages & Tools Used

Node.js

Express.js

MongoDB (via Mongoose)

### Project Setup Commands
npm init -y
npm install express mongoose
npm install --save-dev nodemon
nodemon index.js


Backend Structure & Components

index.js (or server.js)

Entry point of the backend server.

Connects to MongoDB.

Initializes Express server.

Handles routing and middleware setup.

Folders

Controllers → Handle business logic for routes.

Middleware → Authentication, request validation, and error handling.

Models → Define database schemas using Mongoose.

Routes → API endpoints (user, video, channel, etc.).

Key Files

backendDummydata.js → Dummy video data displayed on the frontend (Homepage).

UserSchema.js → Defines schema for user data (username, email, password, etc.).

Video.js → Defines schema for videos (title, type, author, subscribers, likes, dislikes, comments, channel logo, etc.).



✨ Features

Responsive Design – Works on desktop, tablet, and mobile devices.

Homepage – Displays video cards with clickable previews.

Video Player Page –

Watch videos in large format.

View video details (title, author, likes, dislikes, comments).

Suggested videos appear on the right.

Authentication – Users can sign up and log in.

Comment System –

Only logged-in users can post comments.

Users can edit/delete only their own comments.

Search Functionality – Search videos by category (e.g., music, movies).

Channel Creation – Logged-in users can create their own channel.

Channel Details Page – Displays dummy videos, channel name, and user details.



## Important note: Run backend and frontend seprately . When both will run then it will show on UI . 