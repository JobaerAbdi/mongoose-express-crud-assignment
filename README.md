
# Mongoose-Express-CRUD
## Clear instructions on how to run the application locally.
## Prerequisites
- Node.js and npm installed
- MongoDB installed and running
- Set up a MongoDB database using Mongoose for storing user and order data

## Installation
 "dependencies": {
    "bcrypt"
    "cors",
    "dotenv",
    "express",
    "mongoose",
    "zod": "
  },

  "devDependencies": {
    "@types/bcrypt",
    "@types/cors",
    "@types/dotenv",
    "@types/express",
    "@types/mongoose",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/parser",
    "eslint",
    "eslint-config-prettier",
    "prettier",
    "ts-node-dev",
    "typescript"
  }

## Configuration
1. Set up a MongoDB database and update the connection.

## Running the Application
1. Start the server: `npm start`
2. The server will be running at `http://localhost:5000`.

## API Endpoints
- **POST(/api/users:** Create User Into DB).
- **GET(/api/users:** Get All User From DB).
- **GET(/api/users/userId:** Get Single User From DB).
- **PUT(/api/users/userId:** Update Single User).
- **DELETE(/api/users/userId:** Delete Single User).
- **PUT(/api/users/userId/orders** Insert Order inUser)
- **GET(/api/users/userId/orders** Get All Orders).
- **GET(/api/users/userId/orders/total-price** Get Total Price in Orders).


## Sample User JSON
```json
{
    "userId": 1,
    "username": "john_doe",
    "password": "$2b$12$3fJ",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "age": 30,
    "email": "john.doe@example.com",
    "isActive": true,
    "hobbies": ["gardening", "coding"],
    "address": {
      "street": "456 Oak Ave",
      "city": "Smalltown",
      "country": "USA"
    }
  }






