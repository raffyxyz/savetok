import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import logo from '../Savetok.png'

const Header = () => {
    return (
        <>
            <Navbar id='header' bg="light">
                <Container>
                    <Navbar.Brand className='f-bold'>
                        <img
                            src={logo}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            width={254}
                            heigt={86}
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default Header