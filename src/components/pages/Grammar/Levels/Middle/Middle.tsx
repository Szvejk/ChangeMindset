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
		value: 0,
		correctAnswer: ' odp1:have been using ',
	},
	{
		id: 2,
		zad: 2,
		titleExercise: "In 5 years, 60% of the world's population ___ the internet",
		answers: ['odp1: will be using', 'odp2:will use', 'odp3:are going to use'],
		value: 1,
		correctAnswer: ' odp1:will be using',
	},
	{
		id: 6,
		zad: 6,
		titleExercise: 'He stopped talking because nobody ___',
		answers: ['odp1: had listened', 'odp2:was listening', 'odp3:listened'],
		value: 2,
		correctAnswer: ' odp1: was listening',
	},
	{
		id: 3,
		zad: 3,
		titleExercise: 'That suitcase belongs __ me.',
		answers: ['odp1: for', 'odp2:from', 'odp3:to'],
		value: 3,
		correctAnswer: ' odp1:from ',
	},
	{
		id: 4,
		zad: 4,
		titleExercise: '	Do you think ___ are more sensitive than __?',
		answers: ['odp1:  women/the men', ' odp2: women/men', 'odp3:men/the women'],
		value: 4,
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

		value: 5,
		correctAnswer: " 'll give",
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
		<div>
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
							{el}{' '}
						</div>
					);
				})}

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
		</div> </div>
	);
};
const middle = () => {
	return (
		<div className={styles.wrapperMiddle}>
			<div className={styles.middle}>
				{ask.map((el) => {
					return <Question question={el} key={el.id} />;
				})}
			</div>
		</div>
	);
};

export default middle;
