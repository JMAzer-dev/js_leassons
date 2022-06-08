class Products {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    productWithDiscount(discount) {
        return 'R$'+this.price * ((100 - discount) / 100)
    } 
}
let calca004 = new Products('Zara Jeans', 229.90)

let shirt005 = new Products('T-Shirt Branca', 90)

class ProductsWithAttributes extends Products {
    constructor(name, price, colors) {
        super(name,price);
        this.colors = colors;
    }   
    showAllColors(){
        console.log("As Cores São: ")
        this.colors.forEach(colors => {
            console.log(colors)
        });
    }
}
let shoes003 = new ProductsWithAttributes('Tenis caro', 700, ['blue', 'black', 'white'])

console.log(shoes003)

shoes003.showAllColors()