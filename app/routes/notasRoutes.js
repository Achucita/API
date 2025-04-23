const Router = require('koa-router');
const {
  deleteNotaHandler,
} = require('../controllers/notasController');

// Crear una nueva instancia de Koa Router
const router = new Router({ prefix: '/api/notas' });

// Ruta para obtener todas las notas
router.get('/', async (ctx) => {
  ctx.body = 'Obteniendo todas las notas';
});

// Ruta para obtener una nota por ID
router.get('/:id', async (ctx) => {
  const { id } = ctx.params;
  ctx.body = `Obteniendo nota con ID ${id}`;
});

// Ruta para crear una nueva nota
router.post('/', async (ctx) => {
  const { titulo, contenido } = ctx.request.body;
  ctx.body = {
    mensaje: 'Nota creada exitosamente',
    nota: {
      titulo,
      contenido,
    },
  };
});

// Ruta para eliminar una nota
router.delete('/:id', deleteNotaHandler);

// Exportar el router
module.exports = router;
