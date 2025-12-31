# Contact Management Application

Live at: 

## Overview

This project is a responsive Contact Management application built using React. It focuses on real-world frontend engineering practices such as input validation, user experience consistency, data persistence, and safe state handling. The application allows users to add, view, and delete contacts while ensuring data integrity and persistence across browser sessions.

The project is designed to behave like a production-ready frontend application rather than a simple demo.

## Features
1. Contact Creation

 - Add new contacts using a controlled form

 - Fields include name, profile image URL, mobile number, and email

 - All inputs are managed using React state
2. Input Validation

 - Email validation with allowed domain extensions (.com, .in, .org, .net, .edu, .gov, .co, .io)

 - Mobile number restricted to valid 10-digit numeric values

 - Image URL validated for proper URL structure

 - Form submission blocked until all inputs are valid

3. Duplicate Prevention

 - Prevents adding contacts with duplicate mobile numbers

 - Ensures uniqueness and data consistency

4. Dynamic Submit Button Behavior

 - Submit button remains disabled until the form is complete and valid

 - Button opacity reflects form readiness

 - Button text updates dynamically based on form validity

5. Persistent Storage

 - Contacts are stored in browser localStorage

 - Data persists across page reloads, new tabs, and browser restarts

 - State is safely initialized to prevent overwriting stored data

6. Responsive Design

 - Layout adapts for mobile and desktop devices

 - Inline responsive styles ensure consistent behavior even when Tailwind spacing utilities are unavailable

 - Cards and form fields adjust smoothly across screen sizes

7. Consistent Card Layout

 - Fixed card width prevents layout shifts due to varying content lengths

 - Clean and uniform card presentation

8. Contact Deletion

 - Contacts can be removed using stable unique identifiers

 - Avoids index-based deletion issues common in React applications

9. Error Handling

 - Clear error messages displayed without disturbing layout

 - Improves user experience and form usability

## Tech Stack

- React (Functional Components and Hooks)

- JavaScript (ES6+)

- Tailwind CSS (styling and utility classes)

- localStorage (client-side persistence)

## Project Structure
src/
├── components/
│   └── Card.jsx
├── App.jsx
├── main.jsx
└── index.css

## Installation and Setup

Clone the repository
 -> git clone <repository-url>

Navigate to the project directory
 -> cd contact-management-app

Install dependencies
 -> npm install

Start the development server
 -> npm run dev

Open the application in your browser using the provided local URL

## Usage

~ Fill in all form fields with valid data

~ The submit button becomes active once the form is valid

~ Added contacts appear as cards below the form

~ Contacts persist across page reloads and browser sessions

~ Remove contacts using the delete button on each card

## Best Practices Implemented

- Controlled components for all form inputs

- Immutable state updates

- Derived state for form validation

- Lazy state initialization from localStorage

- Defensive parsing of persisted data

- Clean separation of UI and logic

- Responsive layout without layout shift

## Future Enhancements

Edit contact functionality

Cross-tab synchronization

Export and import contacts

Backend integration with authentication

TypeScript migration

## License

This project is open-source and available for learning and demonstration purposes.