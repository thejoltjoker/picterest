# Express Server

Express server that performs Google image searches, stores users and their favorite images in a JSON file. This project is designed to demonstrate the integration of these technologies for a basic web application.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js and npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thejoltjoker/picterest.git
   cd picterest/server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following:

   ```env
   PORT=3000
   DATABASE_PATH="./db.json"
   ```

### Running the Server

Start the server with the following command:

```bash
npm start
```

Visit `http://localhost:3000/api/docs` in your browser to access the api documentation.

## Features

1. **User**: Create and modify users in the JSON database.

2. **Save Images**: Save searched images to a user in the JSON database.

## API Endpoints
  
### User

- `GET /api/user/{userId}`: Get a user from the database.
- `POST /api/user`: Create a user in the database.
- `PUT /api/user/{userId}`: Update a user in the database.
- `DELETE /api/user/{userId}`: Delete a user from the database.

### Favorites

- `GET /api/user/{userId}/favorites`: Get a user's favorites.
- `POST /api/user/{userId}/favorites`: Create a new favorite for user.
- `PUT /api/user/{userId}/favorites/{favoriteId}`: Update a favorite for user.
- `DELETE /api/user/{userId}/favorites/{favoriteId}`: Delete a favorite for user.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
