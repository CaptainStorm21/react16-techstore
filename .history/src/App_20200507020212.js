import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

//react icon 
import {FaHome} from 'react-icons/fa';

//import pages
import Home from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Products from './pages/ProductsPage';
import About from './pages/AboutPage';

function App() {
  return (
    <div >
     <h1><FaHome/>Hello from the store</h1>

    </div>
  );
}


export default App;