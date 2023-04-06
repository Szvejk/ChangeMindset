import React, { useState } from 'react';
import Header from '../Header/Header';
import styles from './ImageSlider.module.css';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import { AiOutlineBorder } from 'react-icons/ai';

interface Slides {
	title: string;
	url: string;
}

interface props {
	slides: Slides[];
}

const ImageSlider = ({ slides }: props) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slideStyles = {
		width: '200%',
		height: '100%',
		backgroundImage: `url(${slides[currentIndex].url})`,
		borderRadius: '10px',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	};
	const gotoPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const gotoNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const gotoSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};
	return (
		<>
			<div className={styles.sliderStyles}>
				<div className={styles.leftArrow} onClick={gotoPrevious}>
					<HiArrowSmLeft />
				</div>
				<div className={styles.rightArrow} onClick={gotoNext}>
					<HiArrowSmRight />
				</div>
				<div style={slideStyles}></div>
			</div>
			<div className={styles.dotsContainerStyles}>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						className={`${styles.dotStyles} ${
							slideIndex === currentIndex ? styles.dotActive : ''
						}`}
						onClick={() => {
							gotoSlide(slideIndex);
						}}
					>
						<AiOutlineBorder />
					</div>
				))}
			</div>
		</>
	);
};

export default ImageSlider;
