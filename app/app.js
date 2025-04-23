const Koa = require('koa');
const Router = require('koa-router');
const dotenv = require('dotenv');
const notasRoutes = require('./routes/notasRoutes');

// Cargar variables de entorno
dotenv.config();

// Crear instancias de Koa y Router
const app = new Koa();
const router = new Router();

// Usar las rutas de notas
router.use('/api/notas', notasRoutes.routes());

// Middleware para manejar errores
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { error: err.message };
  }
});

// Usar el router
app.use(router.routes()).use(router.allowedMethods());

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
