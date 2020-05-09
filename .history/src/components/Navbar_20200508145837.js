import React from 'react'
//icons
import { FaBars, FaCart } from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
//logo
import logo from '../images/logo.svg';

export default function Navbar() {
    return (
        <ProductConsumer>
            {value => {
                const { cartItems, handleSidebar, handleCart } = value;

                return <NavWrapper>
                    <div className="nav-center">
                        <FaBars className="nav-icon" onClick="handleSidebar" />
                        <img src={logo} alt="company logo" />
                        <div className="nav-cart">
                            <FaCartPlus className = "nav-icon"
                        </div>
                    </div>
                </NavWrapper>
            }}
        </ProductConsumer>
    )
}

const NavWrapper = styled.nav`

`