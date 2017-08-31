const fs = require('fs');

const readable = fs.createReadStream("./texto.txt");

//Existen 3 tipos de eventos principales: data, end y close

// Fragmento de documentación oficial de API de Node.js (Stream)
readable.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
    //chunk contiene la informacion de los datos
    console.log(chunk);
    readable.pause();
    console.log('There will be no additional data for 1 second.');
    setTimeout(() => {
        console.log('Now data will start flowing again.');
        readable.resume();
    }, 1000);
});

readable.on('end', () => {
    console.log("Finalizo la lectura del canal...");
})

readable.on('close', () => {
    console.log("Cerrando canal...");
})


//Todo esto puede ser visto al realizar las conexiones http
