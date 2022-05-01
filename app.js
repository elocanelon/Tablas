const { nuevaTabla } = require('./app2');
const argv = require('./config/yargs');
const colors = require ('colors');

console.clear()







nuevaTabla( argv.b, argv.l, argv.h)
   .then( nombreArchivo => console.log(nombreArchivo.trap, "Creado"))
   .catch(err => console.log(err) )
