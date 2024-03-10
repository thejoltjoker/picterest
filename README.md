<h1 align="center">
  <img src="client/public/picterest_desktop_search_02_light.png" width=960 height=600 alt="Screenshot">
  <br/>
  Picterest
</h1>

<h4 align="center">Fullstack application integrating Google Custom Search and Auth0</h4>
<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#installation">Installation</a> •
  <a href="#api-endpoints">API Endpoints</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

## Key Features

- User authentication with Google or GitHub accounts using Auth0.
- Image search using Google Custom Search with suggestions for corrected search terms.
- Display of search results and information about the search duration.
- Ability to save favorite images to a user-specific list.
- View a user's unique list of favorite images.
- Light and dark theme.

## How To Use

### Installation

### Automatic

1. Clone the repository from [GitHub](https://github.com/thejoltjoker/picterest).
2. Navigate to the project directory.
3. Follow instructions to setup [client](./client/README.md) and [server](./server/README.md).
4. Run `npm run setup` from project root directory.
5. Run `npm start` from project root directory.
   - Alternatively run `npm run dev` in client and server respectively.
6. Navigate to http://localhost:5173 in your favorite browser to use the app.

### Manual

1. Clone the repository from [GitHub](https://github.com/thejoltjoker/picterest).
2. Navigate to the project directory.
3. Follow instructions to setup [client](./client/README.md) and [server](./server/README.md).
4. Run `npm run dev` in `server` directory.
5. Open a new terminal and run `npm run dev` in `client` directory.
6. Navigate to http://localhost:5173 in your favorite browser to use the app.

#### Client Setup

Follow [client setup instructions in `client/README.md`](./client/README.md)

#### Server Setup

Follow [server setup instructions in `server/README.md`](./server/README.md)

## API Endpoints
  
### User

- `GET /api/user`: Get a user from the database.
- `POST /api/user`: Create a user in the database.
- `PUT /api/user/{userId}`: Update a user in the database.
- `DELETE /api/user/{userId}`: Delete a user from the database.

### Favorites

- `GET /api/user/{userId}/favorites`: Get a user's favorites.
- `POST /api/user/{userId}/favorites`: Create a new favorite for user.
- `PUT /api/user/{userId}/favorites/{favoriteId}`: Update a favorite for user.
- `DELETE /api/user/{userId}/favorites/{favoriteId}`: Delete a favorite for user.

## Related

- [FSU23D-integration](https://github.com/thejoltjoker/FSU23D-integration) - Repo for the  Systemstöd och Integration Course of FSU23D.

### You may also like...

- [React Todo App](https://github.com/thejoltjoker/react-todo-app) - A simple todo-list application built with React
- [SnapCat](https://github.com/thejoltjoker/snapcat) - Mock Social Media for Cats, Powered by React, TypeScript, React Router, Vite, and Tailwind CSS.

## License

This project is licensed under the [MIT License](LICENSE).

---

Checklist for System Support and Integration 3-Part System - ImageSearch:

[ ] Create scripts to run both server and client

**Klient (Client):**

1. [x] Implement login functionality with Google or GitHub account using Auth0.
2. [x] Enable searching for images with a maximum of 10 results when the user is logged in (Google Custom Search).
3. [x] Implement a suggestion feature ("Menade du…") for misspelled search terms, allowing users to click on the corrected term for a new search.
4. [x] Display the duration of the search process.
5. [x] Allow users, when logged in, to save an image to their list of favorite pictures.
6. [x] Provide a section on the page where users can view their list of favorite images.
7. [x] Ensure that each user has a unique list of favorite images.

**Server:**

1. [x] Create a JSON file on the server to store a list of users and their favorite images.
2. [x] Implement a server endpoint to save a favorite image, validating the data using Joi before saving.
3. [x] Develop a server endpoint that responds with a list of favorite images for a specific user.
4. [/] Define the data structure for the JSON file as specified:

   ```json
   [
     {
       "user": "fakeuser",
       "favoriteImages": [
         {
           "title": "faketitle",
           "byteSize": 2832098,
           "url": "http://………."
         }
       ]
     }
   ]
   ```

**Allmänt (General):**

1. [ ] Submit the task on time.
2. [x] Utilize Git and GitHub for version control.
3. [ ] Include a Readme with information on how to build the projects.
4. [ ] Ensure that `node_modules` is not included in the submission.

**Inlämning (Submission):**

- [ ] Submit the project via the learning platform, either as a zip file or a link to the GitHub repository.

**Additional Notes:**

- [x] Ensure the application is headless with a React frontend and a Node (Express) backend.
- [x] Implement the feature to suggest corrections for misspelled search terms.
- [x] Verify that the server endpoint for saving favorite images works seamlessly with the specified data structure.
- [ ] Consider user authentication and authorization aspects for securing user-specific data.
- [ ] Test the entire application to ensure all specified functionalities are working as expected.
