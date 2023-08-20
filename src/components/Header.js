import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../index.css'

function Header() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const addToCart = () => {
    setCartQuantity(cartQuantity + 1);
  };
  return (
    <>
      <Navbar  sticky="top" expand="lg" className="nav-head">
        <Container>
          <Navbar.Brand>
          <Link to='/' style={{ textDecoration: 'none' }}>
          <img src={logo} className="App-logo" alt="logo" />
          <span className='logo-title-A'>Afia</span> <span className='logo-title-G'>Guide</span>
          </Link> 
          </Navbar.Brand>   
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="nav-links"><Link to='/Register' style={{ textDecoration: 'none' }}>Register</Link></Nav.Link>
              <Nav.Link className="nav-links"><Link to='/Login' style={{ textDecoration: 'none' }}>Login</Link></Nav.Link>
              <Nav>
              <Nav.Link href="/cart">
                <FaShoppingCart />
                <Badge bg="danger">{cartQuantity}</Badge>
              </Nav.Link>
              
              </Nav>
             
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='nav-foot' >
      </div>
    </>
  )
}

export default Header;