import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

// const imgUrl='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640'
// const price = 10.99;

// const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org/',
//     target: '_blank',
//     rel: 'noreferrer noopener',
//   },
//   'Ссылка на reactjs.org',
// );

// // JavaScript Syntax Extension (JSX)

// const linkInJSX = (
//   <a href='https://reactjs.org/' target='_blank' rel='noreferrer noopener'>
//     Ссылка на reactjs.org
//   </a>
// )

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });

// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', {
//   children:[image, title, price, button]
// });

// JavaScript Syntax Extension (JSX)
// const productInJSX = (
//   <div>
//     <img src={imgUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// console.log(productInJSX)

// ReactDOM.render(productInJSX, document.querySelector('#root'))

// const productWithChildrenInProps = React.createElement('div', {
//   children: [image, title, price, button],
// });





ReactDOM.render(<App/>, document.querySelector('#root'))

