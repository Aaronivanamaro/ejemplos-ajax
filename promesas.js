function elevarAlCuadrado(value) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value === "number") {
                resolve({
                    value,
                    result: value * value
                });    
            } else {
                reject(`Error, el valor ${value} no es un número`);
            }
        }, 1000);
    })
}

const resultado = elevarAlCuadrado('20');

resultado
    .then(obj => console.log(`Promesa resuelta: ${obj.result}`))
    .catch(error => console.log(error))
    .finally(() => console.log('Promesa finalizada'))
