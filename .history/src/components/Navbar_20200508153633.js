import React from 'react'
//icons
import { FaBars, FaCart, FaCartPlus } from "react-icons/fa";
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
                            <FaCartPlus className="nav-icon" onClick={handleCart} />
                            <div className="cart-items">{cartItems}</div>
                        </div>
                    </div>
                </NavWrapper>
            }}
        </ProductConsumer>
    )
}

const NavWrapper = styled.nav`
    position: -kit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    background: #

`