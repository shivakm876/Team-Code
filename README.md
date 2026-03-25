# Team Code: Realtime Collaborative Code Editor

## Introduction

**Team Code** is a powerful and intuitive collaborative code editor designed to empower developers and teams to work seamlessly in real-time, regardless of their location. With **Team Code**, you can code together, debug together, and ship faster, together.

## Features

- Multiple users can join a room and edit code together
- Changes are reflected in real time
- Copy button to copy the room id to clipboard
- Leave button to leave the room
- Supports syntax highlighting for different programming languages
- Users can choose theme based on their preferences
- Users can leave the room and rejoin later to continue editing
- Joining & leaving of users is also reflected in real time

## Prerequisites

- Node.js (v20.11.1)
- npm (10.2.4)
- pm2 (5.3.1) : run `npm i -g pm2` to install pm2 globally

## Tech Stack

- React.js
- Node.js
- Express.js
- Socket.io
- CodeMirror
- React-Toastify

## Installation

### Running Locally

1. Clone this repository and cd into it
2. Run `npm install` to install the dependencies
3. Create .env file in the root folder and copy paste the content of example.env, and add necessary credentials.
4. To start the react app client run `npm start` in one terminal
5. To start the server run `npm server:dev` or `pm2 start server.js` in another terminal
6. Go to `http://localhost:3000` to view the app
7. Create a room by clicking on the `create new room` button
8. Copy the room id by clicking on the `Copy ROOM ID` button
9. To join as another user open another browser/browser-window or an incognito tab and go to `http://localhost:3000`
10. Enter the same room id to join the same room

Now both your editors will be synced and you can see the changes in real time. Try opening the same room in multiple browsers/browser-windows and see the changes.

**Note:** To stop your server, press `Ctrl+c` or if you used "pm2", then use `pm2 stop server.js` in the terminal.

## Future Scope

1. [ ] Add AI features for code suggestions 
2. [ ] Add to implement video and voice chat feature inside the editor
3. [ ] Add support for local code file uploading
