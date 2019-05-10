import React from "react";
import './Header.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class Header extends React.Component {
    render() {
        return(
          <div className="navbarcont">
          <Navbar className="navbar" bg="light" expand="lg">
  <Navbar.Brand href="/">TrueSeer</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
      <Nav.Link href="login" className="waves-effect waves-#ff9800 orange btn-small" >Get Started  <i className="fas fa-play-circle"></i></Nav.Link>
</Navbar>
</div>
        );
    }
}