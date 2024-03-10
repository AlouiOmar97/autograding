const express = require("express");
const router = express.Router();

// Création d'un utilisateur
router.post('/', (req, res) => {
  // TODO: Implémenter la création d'un utilisateur
  res.send("Création d'un utilisateur non implémentée");
});


// Lecture d'un utilisateur
router.get('/:id', (req, res) => {
  // TODO: Implémenter la lecture d'un utilisateur
  res.send("Lecture d'un utilisateur non implémentée");
});


// Mise à jour d'un utilisateur
router.put('/:id', (req, res) => {
  // TODO: Implémenter la mise à jour d'un utilisateur
  res.send("Mise à jour d'un utilisateur non implémentée");
});


// Suppression d'un utilisateur
router.delete('/:id', (req, res) => {
  // TODO: Implémenter la suppression d'un utilisateur
  res.send("Suppression d'un utilisateur non implémentée");
});


module.exports = router;