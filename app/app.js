const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const dotenv = require('dotenv');
const notasRoutes = require('./routes/notasRoutes');

// Cargar variables de entorno
dotenv.config();

// Crear instancias de Koa
const app = new Koa();

// Agregar middleware para parsear el cuerpo de la solicitud
app.use(bodyParser());

// Usar las rutas de notas
app.use(notasRoutes.routes());

// Middleware para manejar errores
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { error: err.message };
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
