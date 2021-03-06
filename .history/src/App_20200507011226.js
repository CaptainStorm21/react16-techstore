import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


import {FaHome} from 'react-icons/fa';

function App() {
  return (
    <div >
     <h1><Button><FaHome/></Button>Hello from the store</h1>
    </div>
  );
}

const plumColor = "#8E3179";
const Button = styled.button`
color:#4BC7CF;
background: ${plumColor};
font-size: ${(props) => props.large ?  "3rem":"1rem"} ;
padding: 10px;
radius: 10px;
`;

export default App;