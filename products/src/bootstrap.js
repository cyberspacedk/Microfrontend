import faker from 'faker';

const mount = (element) => {
    let products = '';
    let times = 3;

    while(times--){
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    element.innerHTML = products;
}

//Case for isolation
if(process.env.NODE_ENV === 'development'){
    const element = document.querySelector('#dev-products');

    if(element){
        mount(element)
    }
}

//Case for sharing
export { mount }