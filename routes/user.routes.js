const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controller');

// Obtener todos los usuarios (ruta pública)
router.get('/', getUsers);

// Crear un nuevo usuario (ruta protegida)
router.post('/', authMiddleware, createUser);

// Actualizar un usuario por ID (ruta protegida)
router.put('/:id', authMiddleware, updateUser);

// Eliminar un usuario por ID (ruta protegida)
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;