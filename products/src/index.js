import faker from 'faker';

let products = '';
let times = 3;

while(times){
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
    times--;
}

document.querySelector('#dev-products').innerHTML = products;