const argv = require ('./config/yargs').argv;
const colors = require('colors');
const {crearArchivo,listarTabla} = require ('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){

    case 'listar' :
            listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`.yellow) )
            .catch (e => console.log(e));
        
        break;

    case 'crear' :
        
        crearArchivo(argv.base,argv.limite)
        .then(archivo => console.log(`Archivo creado ${archivo}`.yellow) )
        .catch (e => console.log(e));
        break;

    default :
    console.log('comando no reconocido');

}



//let argv2 = process.argv;

//console.log('limite',argv.limite);




//let parametro = argv[2];
//let base = parametro.split('=')[1];



