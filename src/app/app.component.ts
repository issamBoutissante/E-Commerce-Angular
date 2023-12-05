import { Component } from '@angular/core';
import { Product, Category } from './models/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedProducts: Product[] = [];
  sortedProducts: Product[] = [];
  products!: Product[];
  totalPrice: number = 0;
  orderStatus: string = 'Pas Encore';
  orderStatusColor: string = 'color:red;';
  constructor() {
    this.products = [
      new Product(
        1,
        'Laptop Pro',
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D',
        1200,
        Category.Electronics,
        100,
        10
      ),
      new Product(
        2,
        'Winter Jacket',
        'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Winter/Winter%20jackets/The%20North%20Face%20McMurdo%20Down%20Parka%20%28winter%20jacket%29.jpg',
        150,
        Category.Clothing,
        50,
        10
      ),
      new Product(
        3,
        'Organic Almonds',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKimmv9-l8CIOK6e68PG8U36A0l6JyzBvcjAOIq4i5_w&s',
        10,
        Category.Food,
        200,
        20
      ),
      new Product(
        4,
        'Modern JavaScript',
        'https://fireship.io/courses/js/img/featured.png',
        35,
        Category.Books,
        80,
        20
      ),
      new Product(
        5,
        '4K Television',
        'https://cdn.thewirecutter.com/wp-content/media/2023/11/4ktvbudget-2048px-2160-3x2-1.jpg',
        800,
        Category.Electronics,
        30,
        10
      ),
      new Product(
        6,
        'Running Shoes',
        'https://images.wsjcommerce.net/im-755048?width=1200&height=630',
        100,
        Category.Clothing,
        60,
        12
      ),
      new Product(
        6,
        'Bluetooth Headphones',
        'https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0880.jpg?auto=webp&quality=75&width=1024',
        75,
        Category.Electronics,
        40,
        10
      ),
      new Product(
        8,
        'Novel - Time Traveler',
        'https://booksandbao.com/wp-content/uploads/2023/06/time-travel-books-e1686735155461-1000x563.jpg.webp',
        20,
        Category.Books,
        90,
        12
      ),
      new Product(
        9,
        'Vegan Protein Bars',
        'https://i1.wp.com/earthblokes.com/wp-content/uploads/2021/01/vegan-protein-bars-4.jpg?fit=800%2C800&ssl=1',
        25,
        Category.Food,
        150,
        14
      ),
      new Product(
        10,
        'Smartwatch Fit',
        'data:image/jpeg;base64,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',
        200,
        Category.Electronics,
        70,
        16
      ),
    ];
    this.sortedProducts = [...this.products];
  }
  selectProduct(product: Product) {
    const index = this.selectedProducts.findIndex((p) => p.id === product.id);
    if (index == -1) {
      this.selectedProducts.push(product);
      this.calculateTotal();
    }
  }
  removeProduct(selectedProductId: number) {
    const index = this.selectedProducts.findIndex(
      (p) => p.id === selectedProductId
    );
    if (index > -1) {
      this.selectedProducts.splice(index, 1);
      this.calculateTotal();
    }
  }
  calculateTotal(): void {
    this.totalPrice = this.selectedProducts.reduce((sum, product) => {
      return sum + product.price * (product.selectedQuantity || 0);
    }, 0);
    this.updateState();
  }
  updateState(): void {
    if (this.totalPrice < 10000) {
      this.orderStatus = 'Pas Encore';
      this.orderStatusColor = 'color:red;';
    } else if (this.totalPrice >= 10000 && this.totalPrice < 15000) {
      this.orderStatus = 'Accepted';
      this.orderStatusColor = 'color:blue;';
    } else {
      this.orderStatus = 'Accepted';
      this.orderStatusColor = 'color:green;';
    }
  }
  onSortChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    if (value === 'price') {
      this.sortProductsByPrice();
    } else if (value === 'category') {
      this.sortProductsByCategory();
    }
  }

  sortProductsByPrice(): void {
    this.sortedProducts = [...this.products].sort((a, b) => a.price - b.price);
  }

  sortProductsByCategory(): void {
    this.sortedProducts = [...this.products].sort((a, b) => {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
      return 0;
    });
  }
}
