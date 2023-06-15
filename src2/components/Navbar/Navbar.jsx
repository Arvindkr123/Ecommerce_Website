import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../img/cart-icon-28341(1).png'
import { CiShoppingCart } from 'react-icons/ci'
import { AuthContext } from '../Store/AuthContext';
import { useContext, useEffect } from 'react';
import { auth } from '../config/FirebaseConfig';

function CollapsibleExample() {
    const navigate = useNavigate();
    const AuthCtx = useContext(AuthContext);
    const user = AuthCtx.user;
    console.log(user);
    const handleLogOut = async () => {
        await auth.signOut()
        navigate("/login")
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img style={{ width: '70px' }} className='img-fluid' src={logo} alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className='text-uppercase'>
                            <Link to='/' className='link-light link-underline-opacity-0'>Home</Link>
                        </Nav.Link>
                        <Nav.Link className='text-uppercase'>
                            <Link to='/products' className='link-light link-underline-opacity-0'>Store</Link>
                        </Nav.Link>
                        <Nav.Link className='text-uppercase'>
                            <Link className='link-light link-underline-opacity-0' to='/about'>About</Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-uppercase'>
                            {!user && <Link to="/login" className='link-light link-underline-opacity-0' onClick={handleLogOut}>LogIn</Link>}
                        </Nav.Link>
                        <Nav.Link href="/signUp" className='text-uppercase'>
                            {!user && <Link to='/signUp' className='link-light link-underline-opacity-0'>SignUp</Link>}
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/cart" className='text-uppercase'>
                            <CiShoppingCart size={50} /> <span className='text-danger h-100 display-6'>{user ? AuthCtx.cartProducts.length : 0}</span>
                        </Nav.Link>
                    </Nav>
                    {user && <div className="btn text-light" onClick={handleLogOut}>
                        {user}  LOGOUT
                    </div>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;