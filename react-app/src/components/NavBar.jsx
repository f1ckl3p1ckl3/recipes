import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/navbar.module.css';
import miffy from '../assets/miffy-cook.png';


// import all the recipes
const allRecipes = {};

function importAll(r) {
  r.keys().forEach((key) => {
    const recipeName = key.replace("./", "").replace(".json", "");
    allRecipes[recipeName] = r(key);
  });
}

importAll(require.context("../recipes", false, /\.json$/));


export default function NavBar()
{
    const recipesArray = Object.values(allRecipes);

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
                    {recipesArray.map((recipe) =>
                        <NavDropdown.Item href={recipe.url}>{recipe.title}</NavDropdown.Item>
                    )}
                        {/* <NavDropdown.Item href="/">Bolognese</NavDropdown.Item>
                        <NavDropdown.Item href="/">Lasagne</NavDropdown.Item>
                        <NavDropdown.Item href="/">Pesto</NavDropdown.Item> */}
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