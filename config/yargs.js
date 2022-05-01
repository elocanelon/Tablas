const argv = require('yargs')
            .options('b', {
            alias: "base",
            type: "number",
            demandOption: true,
            describe: "Es la tabla de multiplicar"
            })
            .options('l', {
                alias: "listar",
                type: "Boolean",
                demandOption: true,
                default: false,
               describe: "Muestra la tabla de multiplicar"
            })
            .options('h', {
                alias: "hasta",
                type: "number",
                default: 10,
               describe: "Pone tope a la tabla de multiplicar"
            })
            .check( (argv, options) => {
                if( isNaN( argv.b ) ) {
                    throw "La base tiene que ser un numero"
                } return true;
            })
            .argv;

module.exports = argv