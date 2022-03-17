//import logo from './logo.svg';
import React from 'react';
import  {Outlet} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';




//the menu shouldn't link to another page, but should instead scroll the view down to see the menu interations.  Come back and check on this later
//this will also need to be styled
//why is it showing me that nav is undefined?  When I hover over it, it gives me the details as if 
export default function App() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img src="/workspace/bouche-de-folle/public/img/logo.png" alt="logo"></img></Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}