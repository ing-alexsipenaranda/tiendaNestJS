export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: String;


    constructor(id: number, name: string, description: string, price: number, stock: number, image: String) {
        this.image = image;
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
}