const { getAllNotas, createNota } = require('../models/notaModel');

// Obtener todas las notas
const getAllNotasHandler = async (ctx) => {
  try {
    const notas = await getAllNotas();
    ctx.body = notas;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Error al obtener las notas' };
  }
};

// Crear una nueva nota
const createNotaHandler = async (ctx) => {
  const { titulo, contenido } = ctx.request.body;
  if (!titulo || !contenido) {
    ctx.status = 400;
    ctx.body = { error: 'Título y contenido son requeridos' };
    return;
  }
  try {
    const notaId = await createNota(titulo, contenido);
    ctx.status = 201;
    ctx.body = { id: notaId, titulo, contenido };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Error al crear la nota' };
  }
};

module.exports = {
  getAllNotasHandler,
  createNotaHandler,
};
