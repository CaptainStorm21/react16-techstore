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

function App() {
  return (
    <div >
     <h1><FaHome/>Hello from the store</h1>

    </div>
  );
}


export default App;