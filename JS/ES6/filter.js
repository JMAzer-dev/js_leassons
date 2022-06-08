//Filtro retorna um array menor apenas com os dados que queremos filtrar
let arr = [1, 2 ,3 ,4 ,5]

let highnumbers = arr.filter((n) => {
    if( n >= 4){
        return n
    }
})
let middlenumber = arr.filter((n) => {
    if( n == 3){
        return n
    }
})
let lownumbers = arr.filter((n) => {
    if( n <= 2){
        return n
    }
})
console.log(lownumbers)

const users = [
    {name: 'Joao', available:  true},
    {name: 'Pedro', available:  false},
    {name: 'Matheus', available:  false},
    {name: 'Paulo', available:  true}
]
const available = users.filter((x) => console.log(x.available))
