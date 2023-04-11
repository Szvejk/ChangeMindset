import React from 'react';
import styles from './Header.module.css';
import books from '../../../img/books.jpg';
import ImageSlider from '../SliderHeader/ImageSlider';
import Tutoring from '../Header/Tutoring';

const Header = () => {
	const slides = [
		{
			url: 'https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_960_720.jpg',
			title: 'Photo',
		},
		{
			url: 'https://cdn.pixabay.com/photo/2016/11/08/05/10/students-1807505_960_720.jpg',
			title: 'Photo',
		},
		{
			url: 'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg',
			title: 'Photo',
		},
		{
			url: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_960_720.jpg',
			title: 'Photo',
		},
	];

	return (
		<div className={styles.containerStyles}>
			<div className={styles.descriptionHeader}>
				<h4 className={styles.titleHeader}>
					Strona Change Mindset.pl została stworzona z myślą o osobach, które
					chcą uczyć się języka angielskiego za darmo i bez wychodzenia z domu.
				</h4>
				<p className={styles.descript}>
					Znajdziesz tutaj cenną wiedzę dotyczącą gramatyki angielskiej, poznasz
					nowe zwroty i słówka, a także przećwiczysz swoją wiedzę, dzięki
					darmowym ćwiczeniom.
				</p>
			</div>

			<div className={styles.titleSociety}>
				<h1>Nasza społeczność</h1>
			</div>

			<ImageSlider slides={slides} />
		</div>
	);
};

export default Header;
