# Profile Management Application

## Overview

This application allows users to create, update, Delete and view their profile details.

## Technologies Used

- React
- TypeScript
- React Router
- Axios
- Context API
- Material UI
- React form hook 
- yup validation

## Installation

1. Clone the repository:

   git clone https://github.com/Aayushi-2000/Profile-management.git

2. Navigate to the project directory:

   cd Profile-management

3. Install the dependencies:

   npm install

4. Run the application:

=  npm start



Mock API
To run the mock API, you can use json-server:

Install json-server globally (if you haven't already):

bash

npm install -g json-server

Create a db.json file in the root directory:

json

{
  "profile": {}
}
Start the server:

bash

json-server --watch db.json --port 3001
