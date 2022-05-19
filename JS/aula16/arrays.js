let car = ['volks','merce','bmw','hyundai','chev','fiat'];
// console.log(car[4])
car.push('jaguar');
// console.log(car[5])
car[6] = 'lambo'
// console.log(car)
car.push('chery')
// console.log(car[7])
// console.log(car.length)
car.sort()
// console.log(car)
 let num = [7,8,44,6,9,33,21,24, 12, 4, 3]
 num.sort()
// console.log(num)
 num.push(2)
 num.push(15)
// console.log(num.length)
 
// console.log(num)
// while(i < c){
//     console.log(`${car[i]}`)
//     i++
// }
// for(let i = 0; i < c; i++ ){
//     console.log(`carros: ${car[i]}`)
// }
for(let val in num){
    console.log(`Posicao ${val} numeral ${num[val]}`)
}

for(let i in car){
    console.log(`Posição ${i}, carro ${car[i]}`)
}
let s = car.indexOf('bmw')
let n = num.indexOf(0)
if( s == -1 || n == -1){
    console.log(`O valor digitado não foi encontrado`)
} else {
console.log(`O carro procurado está na posição ${s}`)
console.log(`O numero procurado está na posição ${n}`)
}