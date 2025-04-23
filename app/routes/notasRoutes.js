const Router = require('koa-router');
const {
  getAllNotasHandler,
  getNotaByIdHandler,
  createNotaHandler,
  updateNotaHandler,
  deleteNotaHandler,
} = require('../controllers/notasController');

// Crear una nueva instancia de Koa Router
const router = new Router({ prefix: '/api/notas' });

// Ruta para obtener todas las notas
router.get('/', getAllNotasHandler);

// Ruta para obtener una nota por ID
router.get('/:id', getNotaByIdHandler);

// Ruta para crear una nueva nota
router.post('/', createNotaHandler);

// Ruta para actualizar una nota
router.put('/:id', updateNotaHandler);

// Ruta para eliminar una nota
router.delete('/:id', deleteNotaHandler);

// Exportar el router
module.exports = router;
