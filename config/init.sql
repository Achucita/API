-- Crear la tabla 'notas'
CREATE TABLE IF NOT EXISTS notas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  contenido TEXT NOT NULL,
  fecha_creacion DATETIME NOT NULL,
  fecha_actualizacion DATETIME NOT NULL
);
<<<<<<< HEAD

=======
>>>>>>> dbb60dce358a2498a93e9d9b5b87e6e32fbefbb2
