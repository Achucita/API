const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Crear la conexión a MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Configurar la conexión con un tiempo de espera
async function initializeDatabase() {
  try {
    await connection.connect();
    console.log('Conexión exitosa a MySQL');
  } catch (err) {
    console.error('Error al conectar a MySQL:', err);
    setTimeout(initializeDatabase, 5000); // Reintentar cada 5 segundos
  }
}

initializeDatabase();

// Obtener todas las notas
const getAllNotas = async () => {
  const [rows] = await connection.execute('SELECT * FROM notas');
  return rows;
};

// Crear una nueva nota
const createNota = async (titulo, contenido) => {
  const fecha_creacion = new Date();
  const fecha_actualizacion = new Date();
  const [result] = await connection.execute(
    'INSERT INTO notas (titulo, contenido, fecha_creacion, fecha_actualizacion) VALUES (?, ?, ?, ?)',
    [titulo, contenido, fecha_creacion, fecha_actualizacion]
  );
  return result.insertId; // Devuelve el ID de la nueva nota
};

module.exports = {
  getAllNotas,
  createNota,
};
