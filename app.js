const readLineSync = require('readline-sync')
const {generarNumeroAleatorio, validarAdivinanza} = require('./adivinanza')

const adivinanza = () => {
    let numGenerado = generarNumeroAleatorio()
    do {
        numElegido = readLineSync.question("Adivine el número del 1 al 100\n")
    } while (validarAdivinanza(numElegido, numGenerado));

}

adivinanza()