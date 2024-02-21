
import net from 'node:net'
import fs from "node:fs/promises"


// 1 - Arregla esta función para que el código posterior funcione como se espera:


export const ping = (ip) => {
  const startTime = process.hrtime()

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end()
    return { time: process.hrtime(startTime), ip }
  })
  
  client.on('error', (err) => {
    throw err
    client.end()
  })
}

ping('midu.dev', (err, info) => {
  if (err) console.error(err)
  console.log(info)
})

// 2 - Transforma la siguiente función para que funcione con promesas en lugar de callbacks:

export function obtenerDatosPromise() {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            resolve(null, { data: 'datos importantes' });
          }, 2000);
    }) 
  }

  obtenerDatosPromise()
  .then(info => {
    console.log(info)
  })


/*3 - Explica qué hace la funcion. I
dentifica y corrige los errores en el siguiente código.
 Si ves algo innecesario, elimínalo. 
 Luego mejoralo para que siga funcionando con callback y luego haz lo que consideres para mejorar su legibilidad.
*/

export async function procesarArchivo() {
 const contenido = ""

    try {
      contenido = await  fs.readFile('input.txt', 'utf8', ) 
    } catch(error) {
        console.error('Error guardando archivo:', error.message);
        throw error
    }
    
    const textoProcesado = contenido.toUpperCase();
    
    try {
        await fs.writeFile('output.txt', textoProcesado, handleWrite);
    } catch(error) {
        console.error('Error leyendo archivo:', error.message);
        throw error
    }

  }
  await procesarArchivo()

// 4 - ¿Cómo mejorarías el siguiente código y por qué? Arregla los tests si es necesario:

import fs from 'node:fs';

export  async function leerArchivos() {

    const [archivo1 , archivo2 , archivo3] = await Promise.allSettled([
        fs.readSync('archivo1.txt', 'utf8'),
        fs.readSync('archivo2.txt', 'utf8'),
        fs.readSync('archivo3.txt', 'utf8')
    ]) 

//Option 2
 // const archivo1 = await fs.readSync('archivo1.txt', 'utf8');
 // const archivo2 = await fs.readSync('archivo2.txt', 'utf8');
 // const archivo3 = await fs.readSync('archivo3.txt', 'utf8');

  return `${archivo1} ${archivo2} ${archivo3}`
}

leerArchivos();

// 5 - Escribe una funcion delay que retorne una promesa que se resuelva después de n milisegundos. Por ejemplo:

export async function delay (time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
  }


/*
PROOO LEVEL 
export async function delay (time) {
    let timeoutId
    let promise = new Promise(resolve => {
        timeoutId = setTimeout(resolve, time)
    })

    return {
        clearTimeout: () => clearTimeout(timeoutId),
        promise
    }
}
*/