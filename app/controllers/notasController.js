const { deleteNota } = require('../models/notaModel');

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
  deleteNotaHandler,
};



const { updateNota } = require('../models/notaModel');

// Actualizar una nota
const updateNotaHandler = async (ctx) => {
  const { id } = ctx.params;
  const { titulo, contenido } = ctx.request.body;
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

module.exports = {
  updateNotaHandler,
};


