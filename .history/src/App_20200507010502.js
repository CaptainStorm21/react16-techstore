import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


import {FaHome} from 'react-icons/fa';

function App() {
  return (
    <div >
     <h1><FaHome/>Hello from the store</h1>
     <Button> Styled component </Button>
    </div>
  );
}

const Button = styled.button`
color: #8E3179;
background: #391285;
font-size: 18px;
padding: 1

`;

export default App;