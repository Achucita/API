const connection = require('../../config/db');

// Obtener todas las notas
const getAllNotas = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM notas', (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// Obtener una nota por ID
const getNotaById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM notas WHERE id = ?', [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results[0]);
    });
  });
};

// Crear una nueva nota
const createNota = (titulo, contenido) => {
  return new Promise((resolve, reject) => {
    const fecha_creacion = new Date();
    const fecha_actualizacion = new Date();
    connection.query(
      'INSERT INTO notas (titulo, contenido, fecha_creacion, fecha_actualizacion) VALUES (?, ?, ?, ?)',
      [titulo, contenido, fecha_creacion, fecha_actualizacion],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results.insertId); // Devuelve el ID de la nueva nota
      }
    );
  });
};

// Actualizar una nota
const updateNota = (id, titulo, contenido) => {
  return new Promise((resolve, reject) => {
    const fecha_actualizacion = new Date();
    connection.query(
      'UPDATE notas SET titulo = ?, contenido = ?, fecha_actualizacion = ? WHERE id = ?',
      [titulo, contenido, fecha_actualización, id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results.affectedRows > 0); // Devuelve true si se actualizó al menos una fila
      }
    );
  });
};

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
  getAllNotas,
  getNotaById,
  createNota,
  updateNota,
  deleteNota,
};
