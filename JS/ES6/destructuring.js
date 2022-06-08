//apelidando arrays e objetos

const fruits = ["Maçã", 'Laranja', 'Mamão']
const [f1, f2, f3] = fruits
console.log(f2)

const productsDetails = {
    name: 'Mouse',
    price: 39.99,
    category: 'Preiféricos',
    color: 'Cinza'
}

const {name: productName, price, category: cat, color} = productsDetails;


console.log(`O nome do produto é - ${productName}, ele custa - R$${price}, está na categoria - ${cat}, sua cor é - ${color}`)
