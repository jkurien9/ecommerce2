import React from 'react';
import './App.css'
import Filters from './Components/Filters/filter'
import Products from './Components/Products/products.js'
import Form from './Components/Contact/contact.js'
import SlideShow from './Home/Home.js'

function App () {
   return (
  //    if (window.location.pathname === '/products.html') {
  //   return (<Products/>);
  // } else if (window.location.pathname === '/contact.html'){
  //   return(<Form/>);
  // } else {
  //   console.log("Home Page");
  // }

      <div className="App">
        <SlideShow/>
        <Filters/>
      </div>
  );
}

export default App;