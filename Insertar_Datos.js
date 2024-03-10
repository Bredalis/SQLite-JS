
const CRUD = require('./CRUD.js');

const consulta = `
	INSERT INTO Usuarios(Nombre, Email)
	VALUES('Yulissa', 'YulissaBastardo@gmail.com')`;

const insertar_datos = new CRUD('BBDD.db');
insertar_datos.conectar_bbdd();
insertar_datos.instruccion(consulta);
insertar_datos.ejecucion_ci();
insertar_datos.cerrar_bbdd();