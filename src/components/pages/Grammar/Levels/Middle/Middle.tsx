import React, { useState } from 'react';
import styles from '../Middle/middle.module.css';

type SingleAsk = {
	id: number;
	zad: number;
	titleExercise: string;
	answers: string[];
	correctAnswer: string;
};
const ask = [
	{
		id: 1,
		zad: 1,
		titleExercise:
			'	Since they started, they ___ social media to promote their services',
		answers: ['odp1: use', 'odp2:used', 'odp3:have been using'],
		button: 'Sprawdź',
		correctAnswer: ' odp1:have been using ',
	},
	{
		id: 2,
		zad: 2,
		titleExercise: "In 5 years, 60% of the world's population ___ the internet",
		answers: ['odp1: will be using', 'odp2:will use', 'odp3:are going to use'],
		button: 'Sprawdź',
		correctAnswer: ' odp1:will be using',
	},
	{
		id: 6,
		zad: 6,
		titleExercise: 'He stopped talking because nobody ___',
		answers: ['odp1: had listened', 'odp2:was listening', 'odp3:listened'],
		button: 'Sprawdź',
		correctAnswer: ' odp1: was listening',
	},
	{
		id: 3,
		zad: 3,
		titleExercise: 'That suitcase belongs __ me.',
		answers: ['odp1: for', 'odp2:from', 'odp3:to'],
		button: 'Sprawdź',
		correctAnswer: ' odp1:from ',
	},
	{
		id: 4,
		zad: 4,
		titleExercise: '	Do you think ___ are more sensitive than __?',
		answers: ['odp1:  women/the men', ' odp2: women/men', 'odp3:men/the women'],
		button: 'Sprawdź',
		correctAnswer: ' odp1:women/the men ',
	},
	{
		id: 5,
		zad: 5,

		titleExercise: "A:I'm really thirsty. B: I ___ you some water.",
		answers: [
			"odp1: 'll give ",
			' odp2: will be giving',
			' odp3: am going to give',
		],
		button: 'Sprawdź',

		correctAnswer: " 'll give",
	},
];

const Question = ({ el }: { el: SingleAsk }) => {
	const [showAnswer, setShowAnswer] = useState(false);
	return (
		<div key={el.id}>
			<span className={styles.titleExercise}>{el.titleExercise}</span>

			<div className={styles.answers}>
				{el.answers.map((el) => {
					return (
						<div className={styles.singleEl} key={el}>
							{' '}
							{el}
						</div>
					);
				})}
			</div>

			<button
				className={styles.showAnswer}
				onClick={() => setShowAnswer((prev) => !prev)}
			>
				{' '}
				Sprawdź
			</button>
			{showAnswer ? <div>{el.correctAnswer} </div> : null}
		</div>
	);
};
const middle = () => {
	return (
		<div className={styles.wrapperMiddle}>
			<div className={styles.middle}>
				{ask.map((el) => {
					return <Question el={el} key={el.id} />;
				})}
			</div>
		</div>
	);
};

export default middle;
