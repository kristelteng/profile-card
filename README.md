# Profile-Card

This project is a React application that displays user profiles fetched from the Randomuser.me API. The application features pagination, a color picker for background customization, and a responsive design optimized for mobile devices.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Testing](#testing)

## Features

- Fetch user data from [Randomuser.me API](https://randomuser.me/)
- Displays user profiles with `name`, `email`, `phone number`, `picture` and `location`.
- Pagination for browsing multiple profiles, hidden when only one profile is displayed for a cleaner user experience.
- Allows customization of background color using a color picker, applying changes to all visible cards instantly and persisting the selection upon full page reloads.
- Optimized for mobile devices with modern pagination techniques.

## Project Structure

```
src/
|-- components/
|   |-- App.js
|   |-- UserProfile.js
|   |-- Pagination.js
|   |-- ColorPicker.js
|-- styles/
|   |-- App.css
|   |-- Pagination.css
|   |-- ColorPicker.css
|   |-- UserProfile.css
|-- index.js
|-- variables.css
```

## Installation Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-profiles-app.git
   cd user-profiles-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to see the application in action.
- Use the pagination controls to navigate through the user profiles.
- Use the color picker to change the background color of the profiles.
