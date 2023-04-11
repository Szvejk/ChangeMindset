import React from 'react';
import Header from '../../Menu/Header/Header';
import Menu from '../../Menu/Nav/Menu';
import Society from '../../Menu/OurSociety/Society'
import styles from './Home.module.css'
import Tutoring from '../../Menu/Header/Tutoring'
const Home = () => {
	return (
		<> 
			<Menu />
			<Header />
			<Society />
			<Tutoring />
		
	</>
	);
};

export default Home;
