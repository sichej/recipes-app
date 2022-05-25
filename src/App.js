/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import Recipe from './pages/recipe'
import AddRecipe from './pages/addRecipe';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/home' element={<Home />} />
		<Route path='/recipe/:id' element={<Recipe />} />
    <Route exact path='/addRecipe' element={<AddRecipe />} />
	</Routes>
	</Router>
);
}

export default App;
