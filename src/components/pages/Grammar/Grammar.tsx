import React from 'react';
import Menu from '../../Menu/Nav/Menu';
import styles from '../../pages/Grammar/Grammar.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Grammar = () => {
	return (
		<>
			<Menu />
			<div className={styles.grammarWrapper}>
				<h1 className={styles.titleOfChoose}> Wybierz swój level </h1>
				<div className={styles.wrapperLevels}>
					<Link to='/junior' className={styles.typeofLevel}>
						A1-A2
					</Link>
					<Link to='/middle' className={styles.typeofLevel}>
						B1-B2
					</Link>
					<Link to='/senior' className={styles.typeofLevel}>
						B2+
					</Link>
				</div>
			</div>
		
		</>
	);
};

export default Grammar;
