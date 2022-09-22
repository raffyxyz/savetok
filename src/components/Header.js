import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import logo from '../Savetok.png'

const Header = () => {
    return (
        <>
            <Navbar id='header' bg="light">
                <Container>
                    <Navbar.Brand className='f-bold' href='https://savetok.vecel.app'>
                        <img
                            src={logo}
                            className="d-inline-block align-top logo"
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