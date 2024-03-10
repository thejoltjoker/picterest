# Express Server

Express server that performs Google image searches, stores users and their favorite images in a JSON file. This project is designed to demonstrate the integration of these technologies for a basic web application.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js and npm
- Google Custom Search JSON API Key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thejoltjoker/react-image-search.git
   cd react-image-search/server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following:

   ```env
   PORT=3000
   GOOGLE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   SEARCH_ENGINE_ID=XXXXXXXXXXXXXXXXX
   DATABASE_PATH="./image-search-db.json"
   ```

   Replace `XXXXXXXXX...` with your actual values.

### Running the Server

Start the server with the following command:

```bash
npm start
```

Visit `http://localhost:3000/api/docs` in your browser to access the api documentation.

## Features

1. **Google Image Search**: Perform image searches using the Google Custom Search JSON API.

2. **User**: Create and modify users in the JSON database.

3. **Save Images**: Save searched images to a user in the JSON database.

## API Endpoints

### Search

- `GET /api/search`: Search for images.
  
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
