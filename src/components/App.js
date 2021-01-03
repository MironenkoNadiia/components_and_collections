import React from "react"; 
// import Product from "./product";
// import Section from "./section";
import BookList from "./bookList";
import favouriteBooks from "../books.json";

console.log(favouriteBooks);

export default function App() {
  return (
    <>
<BookList books ={favouriteBooks}/>
      
      {/* <h1>Welcome</h1> */}
      {/* <Section title='Best selling'>
      <Product
        // imgUrl='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640' 
        name='Tacos With Lime'
          price={20}
          quantity={30}
        />
      </Section>

      <Section title='Reccomended'>
      <Product
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      name="Fries and Burger"
          price={14.29}
          quantity={100}
        />
        </Section> */}
    </>
  );
}