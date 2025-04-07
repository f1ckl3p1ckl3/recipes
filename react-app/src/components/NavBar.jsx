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
                <Navbar.Brand href="/recipes/">
                    <img src={miffy} width="50" height="50" alt="miffy"/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/recipes/">Home</Nav.Link>
                    <NavDropdown title="All Recipes" id="basic-nav-dropdown">
                    {recipesArray.map((recipe) =>
                        <NavDropdown.Item><Nav.Link href={`/recipes/${recipe.url}`}>{recipe.title}</Nav.Link></NavDropdown.Item>
                    )}
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
        </div>
    );
}