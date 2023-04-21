import React from 'react';
import styles from './App.module.css';
import Grammar from './components/pages/Grammar/Grammar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Theory from './components/pages/Theory/Theory';
import Exam from './components/pages/Exam/Exam';
import Footer from './components/pages/Footer/Footer';
import Junior from './components/pages/Grammar/Levels/Junior/Junior';
import Middle from './components/pages/Grammar/Levels/Middle/Middle';
import Senior from './components/pages/Grammar/Levels/Senior/Senior';
import Menu from './components/Menu/Nav/Menu'
const App = () => {
	return (
		<>
			<Router>
					<Menu />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/grammar' element={<Grammar />} />
					<Route path='/theory' element={<Theory />} />
					<Route path='/exam' element={<Exam />} />
					<Route path='/footer' element={<Footer />} />
					<Route path='/junior' element={<Junior />} />
					<Route path='/middle' element={<Middle />} />
					<Route path='/senior' element={<Senior />} />

					<Route path='*' element={<h1>Page not found</h1>} />
				</Routes>
			</Router>
		</>
	);
};

export default App;


// zapytać czemu grammar jest taki wysoki
// jak usestate do poprawnej odpowiedzi wykorzystac
// test
// licznik home
// sekcja nakładajaca sie home