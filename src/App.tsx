import React from 'react';
import styles from './App.module.css'
import Grammar from './components/pages/Grammar/Grammar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Theory from './components/pages/Theory/Theory';
import Exam from './components/pages/Exam/Exam';
import Footer from './components/pages/Footer/Footer';

const App = () => {
	return (
		<>
			
			
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/grammar' element={<Grammar />} />
						<Route path='/theory' element={<Theory />} />
						<Route path='/exam' element={<Exam />} />
						<Route path='/footer' element={<Footer />} />
						<Route path='*' element={<h1>Page not found</h1>} />
					</Routes>
				</Router>
			
		</>
	);
};

export default App;
