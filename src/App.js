// import './App.css';
// import Blog from './components/BLog';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Products from './components/Products';
// import Sale from './components/Sale';
// import Services from './components/Services';
// import Subscribe from './components/Subscribe';
// import Watches from './components/Watches';
// import Footer from './components/Footer';




// // import { Routes, Route}  from 'react-router-dom';
// import Login from './components/Login';






// function App() {
//   return (
//     <>
//       <Navbar/>


//        <Home/>
//        <Services/>
//        <Products/>
//        <Watches/>
//        <Sale/>
//        <Blog/>
//        <Subscribe/>
//        <Footer/>





//       {/* <h1 className="text-3xl font-bold ">mini store</h1> */}


//     </>
//   );
// }

// export default App;


// App.js
// App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
// import { useContext } from 'react';
import { CartProvider } from './context/CartContext';

import './App.css';
import Blog from './components/BLog';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Sale from './components/Sale';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import Watches from './components/Watches';
import Footer from './components/Footer';
import Login from './components/Login';
import SignupForm from './components/Signup';
import { Cart } from './components/Cart';
import { Popup } from './components/Popup';
import { Loader } from './components/Loader';
import { Coupan } from './components/Coupan';
import { MobileNav } from './components/MobileNav';
// import ProductShop from './components/Shop';
import MysteryBox from './components/ProductShop';
import { PaymentGateway } from './components/PaymentGateway';
import { Paytm } from './components/Paytm';

function App() {


  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloader(false)
    }, 2000);
  })
  return (

    <>

      {loader ? <Loader /> : <CartProvider>


        <Navbar />
        <MobileNav/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/popup" element={<Popup />} />
          <Route path="/coupancode" element={<Coupan/>} />
          <Route path="/shop" element={<MysteryBox/>} />
          <Route path="/paymentgateway" element={<PaymentGateway/>} />
          <Route path="/paytm" element={<Paytm/>} />


        </Routes>
      </CartProvider>}


    </>

  );
}

function MainPage() {
  return (
    <>
      <nav>
        <ScrollLink to="home" smooth={true} duration={500}></ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500}> </ScrollLink>
        <ScrollLink to="products" smooth={true} duration={500}> </ScrollLink>
        <ScrollLink to="watches" smooth={true} duration={500}></ScrollLink>
        <ScrollLink to="sale" smooth={true} duration={500}> </ScrollLink>
        <ScrollLink to="blog" smooth={true} duration={500}> </ScrollLink>
        <ScrollLink to="subscribe" smooth={true} duration={500}></ScrollLink>
        <ScrollLink to="footer" smooth={true} duration={500}> </ScrollLink>
      </nav>

      <Element name="home">
        <Home />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="products">
        <Products />
      </Element>
      <Element name="watches">
        <Watches />
      </Element>
      <Element name="sale">
        <Sale />
      </Element>
      <Element name="blog">
        <Blog />
      </Element>
      <Element name="subscribe">
        <Subscribe />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
}

export default App;
