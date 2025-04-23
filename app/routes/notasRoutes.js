const Router = require('koa-router');

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

// Exportar el router
module.exports = router;
