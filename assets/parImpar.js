// Hacer un programa que itere por los numeros del 0 al 10 
// y por cada uno de ellos que imprima y nos diga 
// si el numero es par o impar


for (let i = 0; i < 10; i ++){
    if (i === 0 ){
    console.log('El Cero no se puede definir')
    }
    else if (i % 2 == 0){
        console.log(i, 'Es Par')
    }else{
        console.log(i , 'Es Impar.')
    }

}