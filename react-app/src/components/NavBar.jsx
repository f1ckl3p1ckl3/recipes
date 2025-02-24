import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/navbar.module.css';
import miffy from '../assets/miffy-cook.png';

export default function NavBar()
{
    return(
        <div className={styles.navbar}>
        <Navbar style={{marginLeft: -30, marginRight: -30}} bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">
                    <img src={miffy} width="50" height="50" alt="miffy"/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="All Recipes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Bolognese</NavDropdown.Item>
                        <NavDropdown.Item href="/">Lasagne</NavDropdown.Item>
                        <NavDropdown.Item href="/">Pesto</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Nana's Recipes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Blah</NavDropdown.Item>
                        <NavDropdown.Item href="/">Blah</NavDropdown.Item>
                        <NavDropdown.Item href="/">Blah</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
        </div>
    );
}