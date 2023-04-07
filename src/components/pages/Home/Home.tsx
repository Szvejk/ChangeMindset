import React from 'react';
import Header from '../../Menu/Header/Header';
import Menu from '../../Menu/Nav/Menu';

import styles from './Home.module.css'
import Tutoring from '../../Menu/Header/Tutoring'
const Home = () => {
	return (
		<> 
			<Menu />
			<Header />
	<Tutoring />
		
	</>
	);
};

export default Home;
