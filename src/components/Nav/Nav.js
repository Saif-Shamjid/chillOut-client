import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const CosNav = () => {

    const {user,logOut} = useAuth()

    return (
        
        <>
            <Navbar sticky='top' bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand as={Link} to="/home"><h3 className='text-black'>ChillOut</h3></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                    <Nav.Link as={Link} to="/allorders">All Orders</Nav.Link>
                    <Nav.Link as={Link} to="/addaplan">Add A plan</Nav.Link>
                    {
                        user.email ? <div className='cp text-danger mx-3' onClick={logOut}>LogOut</div>
                        : <Nav.Link as={Link} to="/login">Login</Nav.Link>

                    }
                    
                    {
                        user.email ? <Navbar.Text>
                        LogIn in as: {user.displayName}
                        </Navbar.Text>
                        : <p></p>
                    }
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        
    );
};

export default CosNav;