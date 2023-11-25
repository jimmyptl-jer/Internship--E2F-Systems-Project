# E2F Systems

E2F Systems is a platform where users can explore different funding schemes available based on their company information. The project allows the admin to add new schemes and manage users.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

E2F Systems is built on the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a platform for users to discover and access various funding schemes based on their company information. The system empowers administrators to perform CRUD operations on schemes, ensuring efficient management.

## Features

- **Admin:**
  - Perform CRUD operations on funding schemes
  - Manage users efficiently
- **Client:**
  - Discover the best available funding schemes

## Prerequisites

To Run the NodeJS Server
- **Scripts:**
  - `"test"`: Placeholder for running tests.
  - `"start"`: Uses `nodemon` to run the server (`server.js` in this case).

- **Dependencies:**
  - `cors`: Middleware for enabling Cross-Origin Resource Sharing in Express.js.
  - `dotenv`: Loads environment variables from a `.env` file into `process.env`.
  - `express`: Web application framework for Node.js.
  - `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.
  - `nodemon`: Utility that monitors for changes in files and automatically restarts the server.

- **Other Properties:**
  - `"type": "module"`: Specifies that the project is using ECMAScript modules.

This `package.json` file indicates a basic setup for a Node.js server with Express and MongoDB using Mongoose. If you have specific questions or if you need assistance with anything related to this `package.json` file, feel free to ask!


React.js

It seems like you have a basic `package.json` file for a React project. Here's a brief overview of the key sections:

- **Dependencies:**
  - `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event`: Testing utilities for React.
  - `axios`: HTTP client for making requests.
  - `react`, `react-dom`: Core React library and DOM-specific methods.
  - `react-icons`: Library for including icons in your React project.
  - `react-router-dom`: Library for routing in React applications.
  - `react-scripts`: Scripts and configurations used by Create React App.
  - `react-typed`: A React component that allows you to apply typed effect to text.
  - `web-vitals`: Library for measuring web performance.

- **Scripts:**
  - `start`: Runs the app in development mode.
  - `build`: Builds the app for production to the `build` folder.
  - `test`: Runs the test runner.
  - `eject`: Ejects from Create React App, exposing underlying configuration files.

- **Eslint Configuration:**
  - Extends the default Create React App ESLint configuration.

- **Browserslist:**
  - Specifies the supported browsers during development and production.

- **DevDependencies:**
  - `tailwindcss`: A utility-first CSS framework for rapidly building custom user interfaces.

Ensure you have the following prerequisites before setting up the project:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [ReactJS]
- ExpressJS

## Installation

Follow these steps to install and set up the project:

```bash
# Clone the repository
git clone https://github.com/your-username/e2f-systems.git

# Change into the project directory
cd e2f-systems

# Install server dependencies
npm install

# Change into the client directory
cd client

# Install client dependencies
npm install
