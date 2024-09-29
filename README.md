This is a simple Node.js application that connects to a MongoDB database and provides a `/register` API endpoint to store user information, including a username and address.

## Prerequisites

- Node.js (>= 14.x)
- MongoDB (Make sure you have access to a MongoDB instance)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```
   git clone <YOUR_REPOSITORY_URL>
   cd <YOUR_PROJECT_DIRECTORY>
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your configuration:

   ```env
   PORT=<PORT>
   MONGODB_STRING=<MONGODB_STRING>
   ```

   Replace `<PORT>` with the desired port number (e.g., `3000`) and `<MONGODB_STRING>` with your MongoDB connection string.

## Database Structure

The application uses two collections:

1. **User**: Stores user information including username.
2. **Address**: Stores address information related to each user.

## API Endpoint

### `POST /register`

This endpoint allows you to register a new user with a username and address.

**Request Body:**

```json
{
  "userName": "string",
  "address": "string"
}
```

**Response:**

- **200 Created**: Successfully created user and address.
- **500 Bad Request**: If the request body is missing fields or any errors.

### Example Request

```
 POST http://localhost:<PORT>/register \
"Content-Type: application/json" \
{
  "userName": "JohnDoe",
  "address": "123 Main St, Anytown, USA"
}
```

### Example Response

```json
{
  "success": true,
  "message": "Registration successful"
}
```

## Running the Application

To start the application, run:

node index.js

The server will be running at `http://localhost:<PORT>`.
