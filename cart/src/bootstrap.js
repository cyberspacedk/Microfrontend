import faker from 'faker';


const mount = (element) => {
    const cartText =  `<div>You have ${faker.random.number()} items in your cart.</div>`;

    element.innerHTML = cartText;
}

//Case for isolation
if(process.env.NODE_ENV === 'development'){

    const element = document.querySelector('#dev-cart');

    if(element){
        mount(element)
    }
}

//Case for sharing
export { mount }