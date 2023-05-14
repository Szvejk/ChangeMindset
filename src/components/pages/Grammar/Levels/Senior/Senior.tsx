import React, { useState } from 'react';
import styles from './senior.module.css';

type SingleAsk = {
	id: number;
	zad: number;
	titleExercise: string;
	answers: string[];
	correctAnswer: string;
	value: number;
};
const ask: SingleAsk[] = [
	{
		id: 1,

		zad: 1,
		titleExercise: '	They are arriving __ London on Friday.',
		answers: ['odp1: at', 'odp2:on', 'odp3:in'],

		correctAnswer: ' odp1:at ',
		value: 1,
	},
	{
		id: 2,

		zad: 2,
		titleExercise:
			'If you start repairing the car now, do you think you ___ by the end of the day',
		answers: [
			'odp1: will be finishing',
			'odp2: are going to finish',
			'odp3: will have finished',
		],
		value: 2,

		correctAnswer: ' odp3: will have finished',
	},
	{
		id: 6,

		zad: 6,
		titleExercise: 'That suitcase belongs __ me.',
		answers: ['odp1: for', 'odp2:from', 'odp3:to'],

		correctAnswer: ' odp1:to ',
		value: 3,
	},
	{
		id: 3,

		zad: 3,
		titleExercise:
			'When it was time to go home, we decided to take a taxi because we ___ too many beers',
		answers: [
			'odp1: were drinking',
			'odp2:had drunk',
			'odp3:had been drinking',
		],
		value: 4,
		correctAnswer: ' odp1: had drunk ',
	},
	{
		id: 4,

		zad: 4,
		titleExercise: 'Why do you look so tired? ___ the house?	',
		answers: [
			'odp1:  Have you cleaned',
			' odp2: Have you been cleaning',
			'odp3: Did you clean',
		],
		value: 5,
		correctAnswer: ' odp2: Have you been cleaning',
	},
	{
		id: 5,

		zad: 5,
		titleExercise: 'A: How long ___ each other? B: We___ for 10 months',
		answers: [
			'odp1:  had known, have go out',
			' odp2: have you known, have been going out',
			' odp3: had been knowing, had been going out',
		],
		value: 6,
		correctAnswer: ' odp2:have you known/have been going out',
	},
];

const Question = ({ question }: { question: SingleAsk }) => {
	const [showAnswer, setShowAnswer] = useState(false);

	const [value, setValue] = useState(' ');

	function onChangeValue(event: any) {
		setValue(event.target.value);
		console.log(event.target.value);
	}

	return (
		<div onChange={onChangeValue}>
			<div key={question.id}>
				<span className={styles.titleExercise}>{question.titleExercise}</span>

				<div className={styles.answers}>
					{question.answers.map((el) => {
						return (
							<div key={el} className={styles.singleEl}>
								<div className={styles.check}>
									<input
										type='radio'
										name={`answer${question.id}`}
										value={el}
										onChange={onChangeValue}
									/>
								</div>{' '}
								{el}
							</div>
						);
					})}
				</div>

				<button
					className={styles.showAnswer}
					onClick={() => setShowAnswer((prev) => !prev)}
				>
					Sprawdź
				</button>
				{showAnswer ? (
					<div className={styles.correctAnswer}> {question.correctAnswer}</div>
				) : null}
			</div>
		</div>
	);
};

const senior = () => {
	return (
		<div className={styles.wrapperSenior}>
			<div className={styles.senior}>
				{ask.map((el) => {
					return <Question question={el} key={el.id} />;
				})}
			</div>
		</div>
	);
};

export default senior;
