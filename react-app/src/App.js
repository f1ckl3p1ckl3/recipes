import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage.jsx';
import UniqueCard from './components/UniqueCard';
import GridExample from './components/CardGrid';
import NavBar from './components/NavBar';
import RecipePage from './components/RecipePage';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/recipes' element={<RecipePage title="All Recipes" image="holder/js.500px400"/>} />
          <Route path='/recipes' element={<RecipePage title="More Recipes"/>} />
        </Routes>
    </div>
  );
}

export default App;
