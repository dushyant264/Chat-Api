# Chat App API

This is a backend API for a Chat application. It's built with Node.js, Express, and MongoDB.

## Features

- User Registration
- User Login
- Create Chat
- Create Groups
- User Logout
- Delete User
- Rename Group
- Add/Remove Member

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB

### Installing

1. Clone the repository

git clone https://github.com/dushyant264/Chat-Api.git

2. Install NPM packages

   
3. Create a `.env` file in the root directory and add the following:

Mongo_Url = YOUR_MONGODB_CONNECTION_STRING JWT_SECRET = YOUR_SECRET_KEY  Port=5000


4. Run the server

 
## API Endpoints

- Register: `POST /api/user`
- Search Users: ` GET /api/user`
- Login: `POST /api/user/login`
- Fetch Chats: `GET /api/chat`
- Create/Access Chat: `POST /api/chat`
- Create Group: `POST /api/chat/group`
- Rename Group: `PUT /api/chat/rename`
- Add Member: `PUT /api/chat/groupadd`
- Remove Member: `PUT /api/chat/grouparemove`




   
