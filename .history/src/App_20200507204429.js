import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components';

// //react icon 
// import {FaHome} from 'react-icons/fa';

//import pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import SingleProductPage from './pages/SingleProductPage';
import DefaultPage from './pages/DefaultPage';
import CartPage from './pages/CartPage';

//import routes
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    < >
     {/* navbar, sidebar, cart, footer */}
     <Switch>
       <Route path = "/" component={HomePage} />
       <Route path = "/about" component={AboutPage} />
       <Route path = "/contact"  component={ContactPage} />
       <Route path = "/products"  exact  component={ProductsPage} />
       <Route path = "/product/:id"   component={SingleProductPage} />
       <Route path = "/cart" component={CartPage} />
       <Route  component={DefaultPage} />
     </Switch>
    </>
  );
}


export default App;