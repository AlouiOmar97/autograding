// Importation des modules nécessaires
const mongoose = require("mongoose");

// Définition du schéma de l'utilisateur
const User = new mongoose.Schema({
  name: String,
  email: String,
  // Ajoutez ici d'autres champs si nécessaire
});

// Création et exportation du modèle de l'utilisateur
module.exports = mongoose.model('User', User);