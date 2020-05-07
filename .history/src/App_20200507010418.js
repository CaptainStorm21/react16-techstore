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
color: #212312;
background: A term used in Horary Astrology when one of two planets applying to an aspect turns retrograde before the aspect is complete. It is taken as an indication that the matter under negotiation will not be brought to a successful conclusion. 
;
font-size: 18px;

`;

export default App;