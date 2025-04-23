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
