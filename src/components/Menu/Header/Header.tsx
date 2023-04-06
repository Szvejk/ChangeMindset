import React from 'react';
import styles from './Header.module.css';
import books from '../../../img/books.jpg';
import ImageSlider from '../SliderHeader/ImageSlider';

const Header = () => {
	const slides = [
		{
			url: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_960_720.jpg',
			title: 'Photo',
		},
		{
			url: 'https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_960_720.jpg',
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
			<div className={styles.titleSociety}>
				{' '}
				<h1>Nasza społeczność</h1>{' '}
			</div>

			<ImageSlider slides={slides} />
		</div>
	);
};

export default Header;
