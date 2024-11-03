import { goods,Categories,OrderState } from './data'

class Product {
  id: string;
  name: string;
  url: string;
  description: string;
  category: Categories;
  currencyCode: "EUR";
  centAmount: number;
}

class Order {
  id: string;
  content: Product[];
  orderState: OrderState;
  constructor(content: Product[]) {
    this.id = String(Math.floor(1 + Math.random() * (100000 + 1 - 1)));
    this.content = content;
    this.orderState = OrderState.created;
  }
}

class Cart {
  id: string;
  productItems: Product[];
  totalPrice: string;
  currencyCode:"EUR";
}

class OrderManager {
  static orders: [Order];
  static showOrders() {
    return OrderManager.orders;
  }
}


class ProductManager {
  static products: [Product];
  static showProducts() {
    return ProductManager.products;
  }
}

