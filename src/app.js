const express = require("express");
const app = express();

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userController");

// Middleware pour parser le corps de la requête en JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("On est connectés");
});

// Routes pour les films.
app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.post("/api/movies", movieControllers.postMovie);

// Routes pour les utilisateurs.
app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);
app.post("/api/users", userControllers.addUser);

module.exports = app;
