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
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* include a loop here to load in all recipes */}
          <Route path='/recipes/pumpkinchorizorisotto' element={<RecipePage title={allRecipes.bolognese.title} image="holder/js.500px400"/>} />
          <Route path='/recipes' element={<RecipePage title="More Recipes"/>} />
        </Routes>
    </div>
  );
}

export default App;
