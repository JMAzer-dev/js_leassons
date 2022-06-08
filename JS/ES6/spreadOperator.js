const a1 = [1, 2, 3]
const a2 = [7, 8, 9]

const a3 = [...a1,...a2]

console.log(a3)

const a4 = [0,...a3 ,4]

console.log(`Constante a4= ${a4}`)

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 10000, price: 40.000}

const {name} = carName
const {brand: marca} = carBrand
let {km, price: valor} = otherInfos

const car = {...carName,...carBrand,...otherInfos, rodas: 4}

console.log(car.rodas)
console.log(km)
console.log(valor)
