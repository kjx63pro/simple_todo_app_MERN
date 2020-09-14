# Simple Todo App with React (MERN full Stack App)

This app is a very simple todo app with React.js.
The Context API and useReducer are used for state management.
⭐️ In addition, the data is stored in the MongoDB.

(The original version (app-level state management) can be found in [Simple Todo App with React hooks](https://github.com/kjx63pro/simple_todo_app_with_react_hooks))

(The second version (state managed with context API without Backend) can be found in [Simple Todo App with React (Built with Context API and React Hooks)](https://github.com/kjx63pro/simple_todo_app_with_react_context_api_and_react_hooks))

## Quick Start

```
Install all npm pachages used in this app

- In the root folder
$ npm install

- Also in the client folder
$ cd client
$ npm install

Connect to MongoDB
  - Create a file "default.json" in the config file
  - In the default.json file, paste your connection string from mongoDB atlas in <Your conneciton string>
  {
  "mongoURI": "<Your connection string>"
}

```

## Some of the screen shots of this app

## Technologies Used

- Frontend

  - React.js
    - Context API and useReducer for State management
  - Material UI
  - React Bootstrap
    - Navbar

- Backend ⭐️
  - Express
  - MongoDB

## Functions

- Add Todo
- Delete Todo
- Complete Todo (Line-through)
- Navigation to Browse different routes (Navbar with React Bootstrap)
- ⭐️ Store Todo Data to the MongoDB

## Who this app is for

For anyone who has a basic knowledge of React and want to learn MERN Stack for the first time

## Newt Todo

- [ ] Authentication
