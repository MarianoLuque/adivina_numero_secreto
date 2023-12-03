const generarNumeroAleatorio = () => {
    return Math.round(Math.random() * 100 + 1, 0)
}

const validarAdivinanza = (numElegido, numGenerado) => {
    if(numElegido == numGenerado) {
        console.log("Felicidades, has acertado el número")
        return false
    }
    else if(numElegido < numGenerado){
        console.log("No has acertado el número, el número es MAYOR al elegido")
    }
    else{
        console.log("No has acertado el número, el número es MENOR al elegido")
    }
    return true
}

module.exports = {
    generarNumeroAleatorio,
    validarAdivinanza
}