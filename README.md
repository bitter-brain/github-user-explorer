# GitHub User Explorer

GitHub User Explorer is a small frontend application that allows users to search for GitHub profiles and view basic information about them.

https://github-user-explorer-seven.vercel.app

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- RTK Query
- Axios
- SCSS
- BEM methodology
- Feature-Sliced Design (FSD)
- Vite

## Features

- Built a React + TypeScript application for searching GitHub users using the GitHub REST API
- Implemented data fetching and caching using Redux Toolkit Query (RTK Query)
- Structured the project using Feature-Sliced Design to create scalable architecture

## Project Structure

The project follows the **Feature-Sliced Design (FSD)** architecture.

src
├── app # application initialization (store, root component)
├── pages # application pages
├── entities # business entities (user)
├── features # user actions (search)
├── shared # reusable components, hooks, utilities
└── styles # global styles

