
const CRUD = require('./CRUD.js');

const consulta = `DELETE FROM Usuarios`;

const borrar_datos = new CRUD('BBDD.db');
borrar_datos.conectar_bbdd();
borrar_datos.instruccion(consulta);
borrar_datos.ejecucion_ba();
borrar_datos.cerrar_bbdd();