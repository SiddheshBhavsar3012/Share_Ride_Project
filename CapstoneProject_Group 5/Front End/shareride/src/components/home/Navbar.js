import React from "react";
import {Navbar,Nav,Container} from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../../assets/mapcar.png';
const Navs =()=>{

    return(
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand id="image">
        <h2 style={{marginTop:'5px'}}><img src={logo} title="logo" alt="Img Unavailable"/><span>&nbsp;&nbsp;</span>Share Ride</h2>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link to={'/'} className=" nav-home-div" style={{textDecoration:"none",marginTop:'5px',marginRight:'20px'}}>Home</Link> 
          <NavLink to={'/contactUs'} className=" nav-home-div" style={{textDecoration:"none",marginTop:'5px',marginRight:'20px'}}>Contact</NavLink> &nbsp;&nbsp;
          <NavLink to={'/aboutUs'} className=" nav-home-div" style={{textDecoration:"none",marginTop:'5px',marginRight:'20px'}}>About</NavLink> 
            <Link to={'/register'} className=" nav-home-div" style={{textDecoration:"none",marginTop:'5px',marginRight:'20px'}}>Register</Link> 
            <Link to={'/login'} className=" nav-home-div" style={{textDecoration:"none",marginTop:'5px',marginRight:'20px'}}>Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navs;