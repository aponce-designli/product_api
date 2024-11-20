// import { DataSource } from 'typeorm';
// import path from 'path'; // Importa el módulo path para manejar rutas

// const dataSource = new DataSource({
//   type: 'postgres', // Tipo de base de datos
//   host: 'localhost', // Dirección de tu servidor PostgreSQL
//   port: 5432, // Puerto de tu base de datos
//   username: 'postgres', // Usuario de la base de datos
//   password: 'designli', // Contraseña de la base de datos
//   database: 'product_api', // Nombre de tu base de datos
//   entities: [path.resolve('dist/**/*.entity.js')], // Rutas a las entidades compiladas
//   migrations: [path.resolve('dist/migrations/*.js')], // Rutas a las migraciones compiladas
//   synchronize: false, // Desactiva en producción
//   logging: true, // Activa logs para depuración
// });

// export default dataSource;
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres', // Tipo de base de datos
  host: 'localhost', // Dirección del servidor
  port: 5432, // Puerto
  username: 'postgres', // Usuario de la base de datos
  password: 'designli', // Contraseña de la base de datos
  database: 'product_api', // Nombre de tu base de datos
  entities: ['dist/**/*.entity.js'], // Apunta a las entidades compiladas
  migrations: ['dist/migrations/*.js'], // Apunta a las migraciones compiladas
  synchronize: false, // Desactiva synchronize en producción
  logging: true, // Activa logs para depuración
});

export default dataSource;


