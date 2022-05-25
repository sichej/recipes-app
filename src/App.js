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
