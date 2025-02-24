import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UniqueCard from './UniqueCard';

// import all the recipes
const allRecipes = {};

function importAll(r) {
  r.keys().forEach((key) => {
    const recipeName = key.replace("./", "").replace(".json", "");
    allRecipes[recipeName] = r(key);
  });
}

importAll(require.context("../recipes", false, /\.json$/));

function CardGrid() {
  const recipesArray = Object.values(allRecipes);
  return (
    <Row xs={3} md={3} className="g-4">
      {recipesArray.map((recipe, idx) => (
        <Col key={idx}>
          <UniqueCard title={recipe.title} text={recipe.summary} image={`/images/${recipe.image}`} link={recipe.url}/>
        </Col>
      ))}
    </Row>
  );
}

export default CardGrid;

