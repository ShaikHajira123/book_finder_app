# Book Finder Application

## Project Overview

This application allows users to search for books by title and displays results using data from the Open Library API.

## Tech Stack

- **Frontend**: React, TypeScript, CSS
- **State Management**: Redux
- **Backend**: Open Library API for data

## Installation

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the app: `npm start`

## Deployed Application

View the app [here](https://stackblitz.com/edit/vitejs-vite-4nxdag?terminal=dev).

## Documentation

ChatGPT Interaction Documentation

1. Understanding the Project Requirements

   - I asked ChatGPT for help with component structure for building a 'Book Finder application' in React with Redux and TypeScript.
   - ChatGPT provided a clear plan for setting up the app, explaining how to structure files and manage state with Redux.

2. Setting Up Redux with TypeScript

   - I needed brief explanation for creating 'actions and reducers' in TypeScript, which requires defining types for actions and state.
   - ChatGPT walked me through creating `actions_books.ts` for actions like fetching books and `reducers_books.ts` to handle these actions. It also explained how to define types for state and actions to avoid errors.

3. Creating Components in TypeScript

   -  Chatgpt give a detailed explanation with examples how to create functional and class components. I implemented with functional components.

4. Adding Global Styles with CSS
   - I wanted to use a single CSS file (`App.css`) for styles across all components.
   - ChatGPT explained how to import `App.css` in each component and apply classes for consistent styling.

Overall, ChatGPT provided step-by-step guidance on:

- Structuring a React + Redux app with TypeScript
- Creating and typing Redux actions and reducers
- Writing TypeScript components with Redux
- Managing CSS for global styles
