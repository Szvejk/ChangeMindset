import React, { useState } from 'react';
import Menu from '../../Menu/Nav/Menu';
import styles from './Exam.module.css';

type SingleAsk = {
	id: number;
	zad: number;
	titleExercise: string;
	answers: string[];
	correctAnswer: string;
};

const ask: SingleAsk[] = [
	{
		id: 1,
		zad: 1,
		titleExercise: ' Why ___ so fast? Please, slow down!',
		answers: ['odp1:  are you driving', 'odp2: will you drive', 'odp3: do you drive'],

		correctAnswer: ' odp1: are you driving ',
	},
	{
		id: 2,
		zad: 2,
		titleExercise: 'Have you ever ___ to India?',
		answers: ['odp1: travelled', 'odp2: will travel', 'odp3: travel'],

		correctAnswer: ' odp1: travelled ',
	},
	{
		id: 3,
		zad: 3,
		titleExercise: 'A: You look fitter! B: Yes, I ___ at the gym for the last few months.',
		answers: ['odp1: am working out', 'odp2: have been working out', 'odp3: work out'],

		correctAnswer: ' odp1: have been working out  ',
	},
	{
		id: 6,
		zad: 6,
		titleExercise: 'I am pretty sure printed books ____ one day.',
		answers: ['odp1: are disappearing', 'odp2: are going to disappear', 'odp3: will disappear'],

		correctAnswer: ' odp1: will disappear',
	},
	{
		id: 4,
		zad: 4,
		titleExercise: '	Do you think ___ are more sensitive than __?',
		answers: ['odp1:  women/the men', ' odp2: women/men', 'odp3:men/the women'],

		correctAnswer: ' odp1:women/the men ',
	},
	{
		id: 5,
		zad: 5,
		titleExercise: "Don't worry! It's not ___ of ___.",
		answers: [
			'odp1:  the end/world',
			' odp2: the world/the end',
			' odp3: the end/the world',
		],

		correctAnswer: ' odp1:the end/the world ',
	},
];
const Question = ({ el }: { el: SingleAsk }) => {
	const [showAnswer, setShowAnswer] = useState(false);

	return (
		<div key={el.id}>
			<span className={styles.titleExercise}>{el.titleExercise}</span>

			<div className={styles.answers}>
				{el.answers.map((el) => {
					return <div className={styles.singleEl}> {el}</div>;
				})}
			</div>
			<button
				className={styles.showAnswer}
				onClick={() => setShowAnswer((prev) => !prev)}
			>
				{' '}
				Sprawdź
			</button>

			{showAnswer ? <div className={styles.correctAnswer}> {el.correctAnswer}</div> : null}

		</div>
	);
};

const Exam = () => {
	return (
		<>
			<div className={styles.wrapperExam}>
				<div className={styles.Exam}>
					{ask.map((el) => {
						return <Question el={el} key={el.id} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Exam;
