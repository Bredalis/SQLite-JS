
const CRUD = require('./CRUD.js');

const consulta = `
	UPDATE Usuarios SET Nombre = 'Bienvenida' WHERE ID = 1	
`;

const actualizar_datos = new CRUD('BBDD.db');
actualizar_datos.conectar_bbdd();
actualizar_datos.instruccion(consulta);
actualizar_datos.ejecucion_ba();
actualizar_datos.cerrar_bbdd();