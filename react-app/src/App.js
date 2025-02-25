import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage.jsx';
import UniqueCard from './components/UniqueCard';
import GridExample from './components/CardGrid';
import NavBar from './components/NavBar';
import RecipePage from './components/RecipePage';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


// import all the recipes
const allRecipes = {};

function importAll(r) {
  r.keys().forEach((key) => {
    const recipeName = key.replace("./", "").replace(".json", "");
    allRecipes[recipeName] = r(key);
  });
}

importAll(require.context("./recipes", false, /\.json$/));


function App() {
  const recipesArray = Object.values(allRecipes);
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
            {/* load in all the recipes */}
            {recipesArray.map((recipe) => (
            <Route path={recipe.url} element={<RecipePage title={recipe.title} image={`/images/${recipe.image}`} ingredients={recipe.ingredients} method={recipe.method} summary={recipe.summary}/>} />
          ))}
        </Routes>
    </div>
  );
}

export default App;
