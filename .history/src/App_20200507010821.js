import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


import {FaHome} from 'react-icons/fa';

function App() {
  return (
    <div >
     <h1><FaHome/>Hello from the store</h1>
     <Button large> Styled component </Button>
    </div>
  );
}

const plumCcolor = "#8E3179";
const Button = styled.button`
color:#4BC7CF;
background: ${plumColor};
font-size: 18px;
padding: 10px;

`;

export default App;