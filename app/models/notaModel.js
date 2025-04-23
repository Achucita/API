
const connection = require('../../config/db');

// Actualizar una nota
const updateNota = (id, titulo, contenido) => {
  return new Promise((resolve, reject) => {
    const fecha_actualizacion = new Date();
    connection.query(
      'UPDATE notas SET titulo = ?, contenido = ?, fecha_actualizacion = ? WHERE id = ?',
      [titulo, contenido, fecha_actualizacion, id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results.affectedRows > 0); // Devuelve true si se actualizó al menos una fila
      }
    );
  });
};

module.exports = {
  updateNota,
};


const connection = require('../../config/db');

// Eliminar una nota
const deleteNota = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM notas WHERE id = ?', [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results.affectedRows > 0); // Devuelve true si se eliminó al menos una fila
    });
  });
};

module.exports = {
  deleteNota,
};
