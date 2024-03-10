
const CRUD = require('./CRUD.js');

const consulta = `SELECT * FROM Usuarios`;

const mostrar_datos = new CRUD('BBDD.db');
mostrar_datos.conectar_bbdd();
mostrar_datos.instruccion(consulta);
mostrar_datos.ejecucion_mostrar();
mostrar_datos.cerrar_bbdd();