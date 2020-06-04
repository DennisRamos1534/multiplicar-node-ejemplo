// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('================'.green);

    let tabla = '';
    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return; // Para que el codigo no siga ejecutandose
        }

        let info = '';

        for (i = 1; i <= limite; i++) {
            info += `${base} * ${i} = ${base * i}\n`;
            // console.log(resultado);
        }

        const data = new Uint8Array(Buffer.from(info));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = { // exportamos la funcion para utilizarlo en otro archivo
    crearArchivo, // funcion que exportamos
    listarTabla
}