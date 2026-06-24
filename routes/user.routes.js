const express = require('express');
const router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controller');

// Obtener todos los usuarios
router.get('/', getUsers);

// Crear un nuevo usuario
router.post('/', createUser);

// Actualizar un usuario por ID
router.put('/:id', updateUser);

// Eliminar un usuario por ID
router.delete('/:id', deleteUser);

module.exports = router;