import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container } from 'react-bootstrap';

const Navigation_Bar = () => {
  return (
    <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                        <img
                            src="/Pokemon-logo.png"
                            width="80"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Pokédex"
                            />
                        </Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </header>
  )
}

export default Navigation_Bar