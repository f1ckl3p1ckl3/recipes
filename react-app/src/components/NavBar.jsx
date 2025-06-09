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
    const saladArray = recipesArray.filter(recipe => recipe.category === 'Salad');
    const curryArray = recipesArray.filter(recipe => recipe.category === 'Curry');
    const dessertArray = recipesArray.filter(recipe => recipe.category === 'Dessert');
    const soupArray = recipesArray.filter(recipe => recipe.category === 'Soup');

    return(
        <div className={styles.navbar}>
        <Navbar expand={true} bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/recipes/">
                    <img src={miffy} width="50" height="50" alt="miffy"/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/recipes/">Home</Nav.Link>
                    {/* <NavDropdown title="All Recipes" id="basic-nav-dropdown">
                    {recipesArray.map((recipe) =>
                        <NavDropdown.Item href={`${recipe.url.slice(1)}`}>{recipe.title}</NavDropdown.Item>
                    )}
                    </NavDropdown> */}
                    <NavDropdown title="Curries" id="basic-nav-dropdown">
                    {curryArray.map((recipe) =>
                        <NavDropdown.Item href={`${recipe.url.slice(1)}`}>{recipe.title}</NavDropdown.Item>
                    )}
                    </NavDropdown>
                    <NavDropdown title="Soups" id="basic-nav-dropdown">
                    {soupArray.map((recipe) =>
                        <NavDropdown.Item href={`${recipe.url.slice(1)}`}>{recipe.title}</NavDropdown.Item>
                    )}
                    </NavDropdown>
                    <NavDropdown title="Salads" id="basic-nav-dropdown">
                    {saladArray.map((recipe) =>
                        <NavDropdown.Item href={`${recipe.url.slice(1)}`}>{recipe.title}</NavDropdown.Item>
                    )}
                    </NavDropdown>
                    <NavDropdown title="Desserts" id="basic-nav-dropdown">
                    {dessertArray.map((recipe) =>
                        <NavDropdown.Item href={`${recipe.url.slice(1)}`}>{recipe.title}</NavDropdown.Item>
                    )}
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
        </div>
    );
}