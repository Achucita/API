const mysql = require('mysql2');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Configurar la conexión con un tiempo de espera
let connection;

function createConnection() {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
}

connection = createConnection();

// Intentar reconectar si hay errores
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    setTimeout(() => {
      connection = createConnection();
      connection.connect();
    }, 5000); // Reintentar cada 5 segundos
  } else {
    console.log('Conexión exitosa a MySQL');
  }
});

module.exports = connection;

