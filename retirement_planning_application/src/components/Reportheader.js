import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Reportheader = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{paddingLeft:'34rem'}}>Report Page</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Reportheader
