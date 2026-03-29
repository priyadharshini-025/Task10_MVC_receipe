# Recipes App
A complete CRUD (Create, Read, Update, Delete) application for managing recipes using Node.js, Express.js, and Mongoose. The application follows the MVC pattern and includes comprehensive API documentation using Postman.

## Features
- Create a new recipe
- Retrieve all recipes
- Retrieve a single recipe by ID
- Update a recipe by ID
- Delete a recipe by ID

## Tech Stack
- Node.js
- Express.js
- Mongoose (MongoDB)
- Postman (for API documentation)

## Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env` file:
   - `PORT=5005`
   - `MONGO_URL=your_mongodb_connection_string`
4. Run the application: `npm run dev`

## API Endpoints
- POST / - Create a new recipe
- GET / - Get all recipes
- GET /:id - Get recipe by ID
- PUT /:id - Update recipe by ID
- DELETE /:id - Delete recipe by ID

## Project Structure
- `app.js` - Main application file
- `config/db.js` - Database connection
- `controller/receipeController.js` - Business logic
- `model/receipes.js` - Mongoose schema
- `routes/receipeRoutes.js` - API routes

## Postman Collection
Import the Postman collection from `Recipes_App.postman_collection.json` for detailed API documentation with sample requests and responses.