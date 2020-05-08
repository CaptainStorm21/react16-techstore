import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

//react icon 
import {FaHome} from 'react-icons/fa';

//import pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import SingleProductPage from './pages/SingleProductPage';
import DefaultPage from './pages/DefaultPage';

//import routes
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    < >
     {/* navbar, sidebar, cart, footer */}
     <Switch>
       <Route path = "/" component={HomePage} />
       <Route path = "/about" exact component={HomePage} />
       <Route path = "/"  exact  component={HomePage} />
     </Switch>
    </>
  );
}


export default App;