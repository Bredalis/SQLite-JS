
const CRUD = require('./CRUD.js');

const consulta = `
  CREATE TABLE IF NOT EXISTS Usuarios(
    ID INTEGER PRIMARY KEY AUTOINCREMENT, Nombre TEXT, 
    Email TEXT
)`;

const crear_tabla = new CRUD('BBDD.db');
crear_tabla.conectar_bbdd();
crear_tabla.instruccion(consulta);
crear_tabla.ejecucion_ci();
crear_tabla.cerrar_bbdd();