import React from 'react';
import styles from '../Header/Tutoring.module.css';

const Tutoring = () => {
	return (
		<>
			<div className={styles.titleTutoring}>
				<h5 className={styles.titleSmall}>How its work?</h5>
				<h1>How is our tutoring service?</h1>
			</div>

			<div className={styles.flex}>
				<div className={styles.wrapperCards}>
					<div className={styles.card}>
						<p className={styles.textOne}>
							<h2>Relaxing and Learning</h2>
							There are several sections available in different versions but
							most of them have fun
						</p>
					</div>
					<div className={styles.card}>
						<p className={styles.textSecond}>
							<h2>Certificate</h2>
							We are constantly improving the material for the lessons we want
							to pass on to others
						</p>
					</div>
					<div className={styles.card}>
						<p className={styles.textThird}>
							<h2>Private Mentoring</h2>
							All of our specialist in special educawtion have the best
							educational degrees
						</p>
					</div>
					<div className={styles.card}>
						<p className={styles.textFourth}>
							<h2>Creative Thinking </h2>
							All of our specialists in special education have the best
							educational degrees
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Tutoring;
