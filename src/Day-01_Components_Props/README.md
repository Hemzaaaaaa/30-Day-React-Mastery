# Day 1: Components & Props - React Mastery

## Overview
This is Day 1 of the React Mastery 30-day challenge. In this exercise, we learn the basics of React components and props by building two reusable components:

- **Button Component**: A customizable button that takes text, color, and an `onClick` event as props.
- **Card Component**: A card component that displays a title, description, and an image passed as props.

## Concepts Covered
- React **Functional Components**
- Passing **Props** to Components
- Reusing components to build UI

### Key Files:
- **Button.jsx**: A functional button component that accepts `text`, `color`, and `onClick` as props.
- **Card.jsx**: A functional card component that accepts `title`, `description`, and `image` as props.
- **AppDay1.jsx**: The main component that imports and uses `Button` and `Card` components.
- **App.jsx**: The root component that renders `AppDay1`.

## How to Run the Code
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/30-Day-React-Mastery.git
   cd 30-Day-React-Mastery
2. Install dependencies:
    ```bash
    npm install
3. Install dependencies:
    ```bash
    npm start
### Results
After running the app, you should see:
- A button labeled "Click Me" that triggers an alert when clicked.
- A card displaying the title "React Basics," a short description, and an image.