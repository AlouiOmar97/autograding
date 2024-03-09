// Importation des modules nécessaires
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app'); // Assurez-vous que votre application est exportée dans le fichier app.js
const User = require('../models/user'); // Assurez-vous que votre modèle User est exporté dans le fichier models/user.js

describe('API Endpoints', () => {
  let userId; // Pour stocker l'ID de l'utilisateur créé

  // Test pour la création d'un utilisateur
  it('POST /users', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'john.doe@example.com'
      });
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property('name');
    expect(res.body).to.have.property('email');
    userId = res.body._id; // Sauvegarde de l'ID de l'utilisateur pour les tests suivants
  
    // Vérification dans la base de données
    const user = await User.findById(userId);
    expect(user).to.not.be.null;
    expect(user.name).to.equal('John Doe');
    expect(user.email).to.equal('john.doe@example.com');
  });

  // Test pour la lecture d'un utilisateur
  it('GET /users/:id', async () => {
    const res = await request(app)
      .get(`/users/${userId}`);
    expect(res.statusCode).to.equal(200);
    expect(res.body[0]).to.have.property('name');
    expect(res.body[0]).to.have.property('email');
    
    // Vérification dans la base de données
    const user = await User.findById(userId);
    expect(user).to.not.be.null;
  });

  // Test pour la mise à jour d'un utilisateur
  it('PUT /users/:id', async () => {
    const res = await request(app)
      .put(`/users/${userId}`)
      .send({
        name: 'Jane Doe'
      });
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property('user');
    expect(res.body.user.name).to.equal('Jane Doe');

    // Vérification dans la base de données
    const user = await User.findById(userId);
    expect(user).to.not.be.null;
    expect(user.name).to.equal('Jane Doe');
  });

  // Test pour la suppression d'un utilisateur
  it('DELETE /users/:id', async () => {
    const res = await request(app)
      .delete(`/users/${userId}`);
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property('message', 'User deleted');

    // Vérification dans la base de données
    const user = await User.findById(userId);
    expect(user).to.be.null;
  });
});
