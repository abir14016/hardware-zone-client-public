import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/hardware-zone-logo.png';
import userImage from '../../../images/utilities/user-logo.png';
import logOutImage from '../../../images/utilities/logout-logo.png';
import dashboardImage from '../../../images/utilities/dashboard-logo.jpg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const userElement = {
        image: user?.photoURL,
        name: user?.displayName,
        email: user?.email
    }

    const popover = (
        <Popover className='border-border-2' id="popover-basic">
            <div className='m-1 border border-2'>
                <Popover.Header className='text-center' as="h3">{userElement.name}</Popover.Header>
                <Popover.Body>
                    <div className='text-center'>
                        <img style={{ width: 60 }} className='rounded-circle' src={userElement.image} alt="" />
                        <p className='text-secondary text-center'>{userElement.email}</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img style={{ width: 20, height: 20 }} src={logOutImage} alt="" />
                        <h6 className='text-muted ms-2' style={{ cursor: "pointer" }} onClick={handleSignOut}>log out</h6>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img style={{ width: 20, height: 20 }} src={dashboardImage} alt="" />
                        <h6 className='text-muted ms-2' style={{ cursor: "pointer" }} >dashboard</h6>
                    </div>
                </Popover.Body>
            </div>
        </Popover>
    );
    return (
        <Navbar className='header' sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='py-3'>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height="50" alt="" />
                    Hardware Zone
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link href="home#inventories">Inventories</Nav.Link>
                    </Nav>
                    <Nav>

                        <Nav.Link as={Link} to="/myportfolio">My Portfolio</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {
                            user && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        }
                        {user ? <p onClick={handleSignOut} className='btn btn-link text-white text-decoration-none'>Sign Out</p> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}


                        {user && <div className='btn btn-link'>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                {
                                    user?.photoURL ? <img className='profile-picture' src={user.photoURL} alt="" /> : <img style={{ width: 40 }} className='profile-picture' src={userImage} alt="" />
                                }
                            </OverlayTrigger>
                        </div>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;