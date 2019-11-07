

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base,limite) =>{

    console.log('==================================================================='.blue);
    console.log(`===========Tabla del ${base} desde 1 hasta ${limite}===============`.red);
    console.log('==================================================================='.blue);

    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject(`la base ${base} no es un numero`);
            return;
        }

        let tabla= '';

        for( var i = 0; i<=limite; i++){

            tabla +=`${base} * ${i} = ${base*i} \n `;
        }
        fs.writeFile(`tablasmultiplicar/tabla del ${base}- desde 1 hasta ${limite}.txt`, tabla , (err) => {
            if (err) 
             reject (err)
            else 
            resolve(` Tabla del ${base}-desde 1 hasta-${limite}.txt `);
          });

        console.log(tabla);
    });



}


let crearArchivo = (base,limite) => {
    return new Promise ((resolve, reject) => {

        if(!Number(base)){
            reject(`La base ${base} no es un numero`);
            return;
        }

    let tabla ='';


for( let i=1; i<=limite ; i++)
{
    
    tabla +=`${base} * ${i} = ${base*i} \n `;
}

// se puede poner cualquier extension que se desee .txt,.doc,.pdf
fs.writeFile(`tablasmultiplicar/tabla del ${base}- desde 1 hasta ${limite}.txt`, tabla , (err) => {
  if (err) 
   reject (err)
  else 
  resolve(` Tabla del ${base}-desde 1 hasta-${limite}.txt `);
});
  
});
}
    

    

    module.exports = {
        crearArchivo,
        listarTabla
    }
    
