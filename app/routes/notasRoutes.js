const Router = require('koa-router');
const { getAllNotasHandler, createNotaHandler } = require('../controllers/notasController');

// Crear una nueva instancia de Koa Router
const router = new Router({ prefix: '/api/notas' });

// Ruta para obtener todas las notas
router.get('/', getAllNotasHandler);

// Ruta para crear una nueva nota
router.post('/', createNotaHandler);

// Exportar el router
module.exports = router;
