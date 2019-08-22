import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import Logo from './Mano-Libre.jpg';

export default class Navbar extends Component {
  render() {
    return (
    <NavWrapper className="navbar navbar-expand-sm navbar-light bg-light px-sm-5">
    
    <ul className ="navbar-nav align-items-center ml-5">
        <li className="nav-item ml-5">
        <a className="navbar-brand" href="#">
            <img src={Logo} height="100" alt="mdb logo"></img></a>
        </li>
        <li className="nav-item ml-5">
        <Link to ="/DespreNoi" className="nav-link">
            despre noi
        </Link>
        </li>
        <li className="nav-item ml-5">
        <Link to ="/PrajitoriaNoastra" className="nav-link">
            prajitoria noastra
        </Link>
        </li>
        <li className="nav-item ml-5">
        <Link to ="/" className="nav-link">
            Cafea
        </Link>
        </li>
        <li className="nav-item ml-5">
        <Link to ="/contact" className="nav-link">
            contact
        </Link>
        </li>
        <li className="nav-item ml-5">
        <Link to ="/authentificare" className="nav-link">
            <i class="fas fa-sign-in-alt">Authentificare</i>
        </Link>
        </li>
        
    </ul>

        <Link to ="/cart" className="mx-auto">
            <ButtonContainer>
                <span className="mr-2">
                <i className="fas fa-cart-plus"/>
                </span>
                Cosul meu
            </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav
`
    background-color: #964821;
    border-color: #E7E7E7;
    .nav-link{
        color: var(--mainBrown)!important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`