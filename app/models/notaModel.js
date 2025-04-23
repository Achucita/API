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
