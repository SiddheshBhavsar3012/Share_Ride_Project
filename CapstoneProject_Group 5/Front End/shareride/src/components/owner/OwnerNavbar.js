import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
export default function OwnerNavbar() {
  return (
    <Navbar bg="rgb(240, 50, 173)" variant="dark">
        <Container>
          <Navbar.Brand href="/">Owner</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/owner">Home</Nav.Link>
            <Nav.Link href="/owner/vehiclelist">Vehicles</Nav.Link>
            <Nav.Link href="/owner/ridelist">Rides</Nav.Link>
            <Nav.Link href="/owner/sendmsg">Message</Nav.Link>
            <Nav.Link href="/owner/bookings">Bookings</Nav.Link>
            <Nav.Link href="/login" id="logout">Logout</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
  )
}
