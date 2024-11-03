import {goods, Categories, OrderState} from './data'

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
    this.name=product.name;
    this.url=product.url;
    this.description=product.description;
    this.currencyCode='EUR';
    this.centAmount=product.centAmount
  }

  addToCart(id) {

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
  static totalPrice: number = Cart.productItems.reduce(function(sum:number, currentItem:ProductInterface) {
    return sum + currentItem.centAmount;
  },0)
  currencyCode: "EUR";


  static showCart() {
    return Cart.productItems
  }

}

class OrderManager {
  static orders: [Order];

  static showOrders() {
    return OrderManager.orders;
  }

}


class ProductManager {
  static products: Product[]=[];

  static showAllProducts() {
    return ProductManager.products;
  }
  static addToCart(id:string) {
    ProductManager.products.forEach((product)=>{
      if(product.id===id){
        const chosenProduct = product;
        Cart.productItems.push(chosenProduct );
      }
    })

  }
}

console.log('Make goods from file data.ts')
goods.forEach(product => {
  ProductManager.products.push(new Product(product))
});

console.log('Show all goods',ProductManager.showAllProducts());

console.log('Add to cart the item with id=2');
ProductManager.addToCart('2')

console.log('Check the cart',Cart.showCart());

console.log('Add to cart the item with id=5');
ProductManager.addToCart('5')

console.log('Check the cart',Cart.showCart());