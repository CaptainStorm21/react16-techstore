import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


import {FaHome} from 'react-icons/fa';

function App() {
  return (
    <div >
     <h1><FaHome/>Hello from the store</h1>
    </div>
  );
}

const Button = styled.button`color: #212312;
background: orangeyellow;
font-size: 18px;
`

export default App;