const { getAllNotas, getNotaById, createNota, updateNota, deleteNota } = require('../models/notaModel');

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

// Obtener una nota por ID
const getNotaByIdHandler = async (ctx) => {
  const { id } = ctx.params;
  try {
    const nota = await getNotaById(id);
    if (!nota) {
      ctx.status = 404;
      ctx.body = { error: 'Nota no encontrada' };
      return;
    }
    ctx.body = nota;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Error al obtener la nota' };
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

// Actualizar una nota
const updateNotaHandler = async (ctx) => {
  const { id } = ctx.params;
  const { titulo, contenido } = ctx.request.body;
  if (!titulo || !contenido) {
    ctx.status = 400;
    ctx.body = { error: 'Título y contenido son requeridos' };
    return;
  }
  try {
    const updated = await updateNota(id, titulo, contenido);
    if (!updated) {
      ctx.status = 404;
      ctx.body = { error: 'Nota no encontrada' };
      return;
    }
    ctx.body = { message: 'Nota actualizada correctamente' };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Error al actualizar la nota' };
  }
};

// Eliminar una nota
const deleteNotaHandler = async (ctx) => {
  const { id } = ctx.params;
  try {
    const deleted = await deleteNota(id);
    if (!deleted) {
      ctx.status = 404;
      ctx.body = { error: 'Nota no encontrada' };
      return;
    }
    ctx.body = { message: 'Nota eliminada correctamente' };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Error al eliminar la nota' };
  }
};

module.exports = {
  getAllNotasHandler,
  getNotaByIdHandler,
  createNotaHandler,
  updateNotaHandler,
  deleteNotaHandler,
};
