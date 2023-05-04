import React, { useState } from 'react';
import styles from './Menu.module.css';
import Logo from '../../../img/logo-white.png';
import Grammar from '../../pages/Grammar/Grammar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Theory from '../..//pages/Theory/Theory';
import Exam from '../../pages/Exam/Exam';
import Footer from '../../pages/Footer/Contact';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';

const menu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.navbar}>
			<div className={styles.logoWrapper}>
				<img className={styles.logo} src={Logo} alt='Logo' />Ss
				<h1 className={styles.title}>Change Mindset</h1>
			</div>
			<nav className={styles.nav}>
				<ul className={`${styles.nav__links} ${isOpen ? styles.active : ''}`}>
					<Link to='/'>Home</Link>
					<Link to='/grammar'>Gramatyka</Link>
					<Link to='/theory'>Teoria</Link>
					<Link to='/exam'>Test</Link>
					<Link to='/footer'>Kontakt</Link>
				</ul>
			</nav>
			<div
				className={styles.mobilemenuicon}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				{!isOpen ? <VscMenu /> : <VscChromeClose />}{' '}
			</div>
		</div>
	);
};

export default menu;
