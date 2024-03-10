
// Hacer CRUD con POO

// Importar modulo
const sqlite3 = require('sqlite3').verbose();

class CRUD{
	constructor(bbdd_url){
		this.bbdd_url = bbdd_url;
		this.bbdd = null;
	}

	conectar_bbdd(){
		this.bbdd = new sqlite3.Database(this.bbdd_url);
	}

	instruccion(consulta){
		this.instruccion_consulta = consulta;
	}

	ejecucion_ci(){

		// Crear tabla e insertar datos

		this.bbdd.serialize(() => {
		  this.bbdd.run(this.instruccion_consulta, (err) => {

		    if (err){
		      console.error('Error al ejecutar consulta', err.message);
		    
		    } else{
		      console.log('Consulta ejecutada exitosamente');
		    }  

		  });
		});
	}

	ejecucion_ba(){
		this.bbdd.run(this.instruccion_consulta);
	}

	ejecucion_mostrar(){
		this.bbdd.all(this.instruccion_consulta, (err, datos) => {
			if (err){
				console.error('Hubo un error');
				return;
			}

			// Resultado
			console.log('Datos:', datos);
		});
	}

	cerrar_bbdd(){
		this.bbdd.close();
	}
}

// Exportar la clase
module.exports = CRUD;