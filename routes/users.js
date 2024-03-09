const express = require("express");
const router = express.Router();
const User = require("../models/user")
// Création d'un utilisateur
router.post('/', (req, res) => {
  // TODO: Implémenter la création d'un utilisateur
  //res.send("Création d'un utilisateur non implémentée");
  new User({
    name: req.body.name,
    email: req.body.email
  })
  .save()
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
});

// Lecture d'un utilisateur
router.get('/:id', (req, res) => {
  // TODO: Implémenter la lecture d'un utilisateur
  //res.send("Lecture d'un utilisateur non implémentée");
  User.find({_id:req.params.id}).then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
});

// Mise à jour d'un utilisateur
router.put('/:id', (req, res) => {
  // TODO: Implémenter la mise à jour d'un utilisateur
  // res.send("Mise à jour d'un utilisateur non implémentée");
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }
    //  res.status(200).send({ user: user });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// Suppression d'un utilisateur
router.delete('/:id', (req, res) => {
  // TODO: Implémenter la suppression d'un utilisateur
  // res.send("Suppression d'un utilisateur non implémentée");
  User.findByIdAndDelete(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send({ message: 'User deleted' });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
