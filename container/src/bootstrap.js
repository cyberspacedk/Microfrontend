import {mount as productMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartShow';

console.log('Container');

const productsWrapper = document.querySelector('#dev-products');
productMount(productsWrapper);

const cartWrapper = document.querySelector('#dev-cart');
cartMount(cartWrapper)