// Importation de la connexion à la base de données
const database = require("../../database");

// Fonction pour récupérer tous les films de la base de données
const getMovies = async (req, res) => {
  try {
    const [movies] = await database.query("SELECT * FROM movies");
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

// Fonction pour récupérer un film par son ID
const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  database

    .query("select * from movies where id = ?", [id])

    .then(([movies]) => {
      if (movies[0] != null) {
        res.json(movies[0]);
      } else {
        res.sendStatus(404);
      }
    })

    .catch((err) => {
      console.error(err);

      res.sendStatus(500);
    });
};

// // Récupérer tous les utilisateurs
// const getAllUsers = async (req, res) => {
//   try {
//     const [users] = await database.query("SELECT * FROM users");
//     res.status(200).json(users);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Erreur lors de la récupération des utilisateurs");
//   }
// };

// // Récupérer un utilisateur par son ID
// const getUserById = async (req, res) => {
//   try {
//     const [user] = await database.query("SELECT * FROM users WHERE id = ?", [
//       req.params.id,
//     ]);

//     if (user.length > 0) {
//       res.status(200).json(user[0]);
//     } else {
//       res.status(404).send("Utilisateur non trouvé");
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Erreur lors de la récupération de l'utilisateur");
//   }
// };

// module.exports = { getAllUsers, getUserById };

// Exportation des fonctions pour les utiliser dans les routes
module.exports = {
  getMovies,
  getMovieById,
};
