# TalkSpace

TalkSpace is a mini WhatsApp clone built with Node.js, Express, and MongoDB. It allows users to create, read, update, and delete chats. All chats are visible to everyone.

## Features

- **Create Chats**: Users can create new chats with fields for 'to', 'from', and 'message'.
- **Edit Chats**: Users can edit existing chats.
- **Delete Chats**: Users can delete chats.
- **View Chats**: All chats are visible to everyone.

## Technologies Used

- Node.js
- Express
- MongoDB
- EJS (Embedded JavaScript)
- Mongoose
- Method-Override

## Installation

1. Clone the repository:

  git clone https://github.com/yourusername/talkspace.git
  cd talkspace

2. Install dependencies:

  npm install
  
3. Start the application:

  node index.js

## Open your browser and navigate to http://localhost:8080

## File Structure

.
├── index.js
├── models
│   └── chats.js
├── public
│   ├── css
│   └── js
├── views
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
└── package.json

## Routes

- GET /: Display all chats.
- GET /chats/new: Form to create a new chat.
- POST /chats: Create a new chat.
- GET /chats/edit: Form to edit an existing chat.
- PUT /chats: Update an existing chat.
- DELETE /chats/: Delete an existing chat.

## How to Use
- Home Page: Shows all chats.
- Create New Chat: Click on "New Chat" to open the form for creating a new chat.
- Edit Chat: Click on the "Edit" button next to a chat to edit its message.
- Delete Chat: Click on the "Delete" button next to a chat to delete it.

## Contact
For any questions or inquiries, please contact Roshni Gupta at [roshni.gupta.212.r@gmail.com].
