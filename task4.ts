import {Categories, goods, OrderState} from './data'

interface ProductInterface {
  id: string;
  name: string;
  url: string;
  description: string;
  category: Categories;
  currencyCode: string;
  centAmount: number;
}

class Product implements ProductInterface {
  id: string;
  name: string;
  url: string;
  description: string;
  category: Categories;
  currencyCode: 'EUR';
  centAmount: number;

  constructor(product: ProductInterface) {
    this.id = product.id;
    this.category = product.category;
    this.name = product.name;
    this.url = product.url;
    this.description = product.description;
    this.currencyCode = 'EUR';
    this.centAmount = product.centAmount
  }
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
  static productItems: Product[] = [];
  static currencyCode: "EUR" = "EUR";

  static getTotalPrice() {
    return Cart.productItems.reduce(function (sum: number, currentItem: ProductInterface) {
      return sum + currentItem.centAmount;
    }, 0)
  }

  static showCart() {
    return {
      products: Cart.productItems,
      totalPrice: Cart.productItems.length !== 0 ? String(Cart.getTotalPrice()) + " " + Cart.currencyCode : 0,
    }
  }

  static removeProductFromCart(id: string) {
    Cart.productItems.forEach((product, index) => {
      if (product.id === id) {
        const chosenIndex = index;
        Cart.productItems.splice(chosenIndex, 1);
      }
    })
  }

  static clear() {
    if (Cart.productItems.length) {
      Cart.productItems = [];
    }
  }

  static createOrder() {
    if (Cart.productItems.length) {
      const newOrder = new Order(Cart.productItems);
      OrderManager.orders.push(newOrder);
      Cart.clear();
      return `The order ${newOrder.id} was created successfully`;
    } else {
      return 'The cart is empty. There is nothing to add for the new order';
    }
  }
}

class OrderManager {
  static orders: Order[] = [];

  static showOrders() {
    return OrderManager.orders.length? OrderManager.orders : 'There are no orders yet';
  }

  static changeOrderState(indexOrder: number, orderState: OrderState) {
    OrderManager.orders.forEach((product, index) => {
      if (index === indexOrder) {
        const chosenIndex = index;
        OrderManager.orders[chosenIndex].orderState = orderState;
      }
    })
  }
}


class ProductManager {
  static products: Product[] = [];

  static showAllProducts() {
    return ProductManager.products;
  }

  static showProductsFilteredByCategory(chosenCategory:Categories){
    if(ProductManager.products.length){
      return ProductManager.products.filter((product:Product)=>product.category===chosenCategory);
    }
  }

  static addToCart(id: string) {
    ProductManager.products.forEach((product) => {
      if (product.id === id) {
        const chosenProduct = product;
        Cart.productItems.push(chosenProduct);
      }
    })
  }
}


console.log('Create goods from file data.ts')
goods.forEach(product => {
  ProductManager.products.push(new Product(product))
});

console.log('Show all goods after creating from file', ProductManager.showAllProducts());

console.log('Show goods filtered by category="kitchen"',ProductManager.showProductsFilteredByCategory(Categories.kitchen));

console.log('Add to cart the item with id=2');
ProductManager.addToCart('2')

console.log('Check the cart after adding the item with id=2', Cart.showCart());

console.log('Check if there are any orders',OrderManager.showOrders());

console.log('Add to cart the item with id=5');
ProductManager.addToCart('5')

console.log('Check the cart after adding the item with id=5', Cart.showCart());

console.log('Remove from the cart the item with id=5');
Cart.removeProductFromCart('5');

console.log('Check the cart after removing the item with id=5', Cart.showCart());

console.log('Create the order...', Cart.createOrder());

console.log('Check the cart after creating the order, cart must be empty', Cart.showCart());

console.log('Show all orders after creating the first order', OrderManager.showOrders());

console.log('Add to cart the item with id=8');
ProductManager.addToCart('8');

console.log('Create another order from cart...', Cart.createOrder());

console.log('Show all orders after the another order was made', OrderManager.showOrders());

console.log('Changing order state of order with index of array equal to 1');
OrderManager.changeOrderState(1, OrderState.onTheWay);

console.log('Show all orders after changing the state of chosen order', OrderManager.showOrders());



