<!-- TODO Write documentation -->
# React Frontend for Image Search

A React application that interfaces with an Express server for Google image searches, user management, and favorite image storage. This project showcases the integration of React with a backend server to create a basic web application.

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed:

- Node.js and npm
- Google Custom Search JSON API Key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thejoltjoker/react-image-search.git
   cd react-image-search/client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following:

   ```env
    VITE_API_SERVER_URL=http://localhost:3000
    VITE_AUTH0_DOMAIN=dev-xxxxxxxxxxxxxxxx.eu.auth0.com
    VITE_AUTH0_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    VITE_AUTH0_CALLBACK_URL=http://localhost:5173/callback
    VITE_GOOGLE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    VITE_SEARCH_ENGINE_ID=XXXXXXXXXXXXXXXXX
   ```

### Running the Frontend

Start the React development server with the following command:

```bash
npm run dev
```

Visit `http://localhost:5173/` in your browser to access the React client.

## Features

1. **Google Image Search**: Perform image searches using the Google Custom Search JSON API.

2. **User**: Create ~~and modify~~ users through the Express server.

3. **Save Images**: Save searched images to a user through the Express server.

## API Integration

The React client communicates with the Express server through the defined API endpoints. Ensure the Express server is running and accessible at the specified `VITE_API_SERVER_URL`.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
