-- Crear la tabla 'notas'
CREATE TABLE IF NOT EXISTS notas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  contenido TEXT NOT NULL,
  fecha_creacion DATETIME NOT NULL,
  fecha_actualizacion DATETIME NOT NULL
);

-- Insertar una nota de ejemplo (opcional)
INSERT INTO notas (titulo, contenido, fecha_creacion, fecha_actualizacion)
VALUES ('Nota de Ejemplo', 'Esta es una nota de prueba.', NOW(), NOW());
