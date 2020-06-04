const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // importamos el archivo de multiplicar

let comando = argv._[0]; // obtenemos el parametro en la posicion 0

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado`, colors.green(archivo.green)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}
// console.log(process.argv);
// console.log(argv);
// let parametro = argv[2]; // gaurdamos solo el parametro de la base que es la posicion 3
// let base = parametro.split('=')[1]; // Separamos los string en un arreglo por el signo que le indicamos 
// ademas le decimos que solo seleccione el segundo arreglo que es el numero