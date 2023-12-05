export enum Category {
    Electronics,
    Clothing,
    Food,
    Books
}

export class Product {
    id:number;
    name: string;
    image: string;
    price: number;
    category: Category;
    quantityInStock: number;
    minimumOrderQuantity: number;
    selectedQuantity:number;

    constructor(id:number,name: string, image: string, price: number, category: Category, quantityInStock: number, minimumOrderQuantity: number) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.category = category;
        this.quantityInStock = quantityInStock;
        this.minimumOrderQuantity = minimumOrderQuantity;
        this.selectedQuantity=minimumOrderQuantity;
    }
}
