const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 399.99, category: 'Eletro'},
    {name: 'Calça Jeans', price: 59.99, category: 'Roupas'}
]
// percorre os itens baseado numa condição e o modifica de acordo com a vontade
products.map((x) => {
    if(x.category === 'Roupas') {
        x.onSale = true
    }
})
console.log(products)
