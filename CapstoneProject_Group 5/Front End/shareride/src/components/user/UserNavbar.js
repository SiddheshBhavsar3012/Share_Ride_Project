import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
export default function UserNavbar() {
  return (
    <Navbar bg="rgb(245, 95, 193)" variant="dark">
            <Container className="d-flex">
                <Navbar.Brand href="/">User</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/user" activeClassName="active">Home</Nav.Link>
                    <Nav.Link href='/user/chooseride' activeClassName="active">Share Ride</Nav.Link>
                    <Nav.Link href="/user/bookings" activeClassName="active">Bookings</Nav.Link>
                    <Nav.Link href="/user/sendmsg" activeClassName="active">Message</Nav.Link>
                    <Nav.Link href="/login" id="logout" activeClassName="active">Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
  )
}
