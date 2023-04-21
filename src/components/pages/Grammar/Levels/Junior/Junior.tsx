import React, { useState } from 'react';
import styles from './junior.module.css';

// const Question=()=>{
// 	const [showAnswer,setShowAnswer]=useState(false)

// 	return <><div className={styles.zad1}>
// 					<h5 className={styles.titleExercise}>
// 						I ___ anything about the night of the accident.
// 					</h5>
// 					<p>a. don't remember</p>
// 					<p style={{color: showAnswer ? 'green' : 'black'}}>b.'m not remembering</p>
// 					<p>c.wasn't remembering</p>
// 				</div>
// 				<button className={styles.checkAnswers1} onClick={()=>setShowAnswer(true)}>Sprawdź odpowiedź</button></>
// }

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
		titleExercise: '	I ___ anything about the night of the accident.',
		answers: [
			"odp1: don't remember",
			"odp2:'m not remembering",
			"odp3:wasn't remembering",
		],
		correctAnswer: " odp1: don't remember ",
	},
	{
		id: 2,
		zad: 2,
		titleExercise: 'We___our website.',
		answers: [
			'odp1: recently renewed',
			'odp2:are recently renewing',
			'odp3: have recently renewed',
		],
		correctAnswer: ' odp1: have recently renewed ',
	},
	{
		id: 3,
		zad: 3,
		titleExercise: 'We took off our clothes and ___ into the river.',
		answers: ['odp1: were jumping', 'odp2:had jumped', 'odp3:jumped'],

		correctAnswer: ' odp1: jumped  ',
	},
	{
		id: 8,
		zad: 8,
		titleExercise: "I'm pretty sure printed books ___ one day.",
		answers: [
			'odp1: are disappearing',
			'odp2:are going to disappear',
			'odp3:will disappear',
		],

		correctAnswer: ' odp1: will disappear ',
	},
	{
		id: 4,
		zad: 4,
		titleExercise: '	Do you think ___ are more sensitive than __?',
		answers: ['odp1:  women/the men', ' odp2: women/men', 'odp3:men/the women'],

		correctAnswer: ' odp1:men/the women ',
	},
	{
		id: 5,
		zad: 5,
		titleExercise: "Don't worry! It's not ___ of ___.",
		answers: [
			' odp1:  the end/world',
			' <input type="radio"/> odp2: the world/the end',
			' <input type="radio"/> odp3: the end/the world',
		],

		correctAnswer: ' odp3:the end/the world ',
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
						<div key={el} className={styles.singleEl}>
							<input type='radio' className={styles.check} /> <br />
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
				<div className={styles.correctAnswer}> {el.correctAnswer}</div>
			) : null}
		</div>
	);
};
const Junior = () => {
	return (
		<div className={styles.wrapperJunior}>
			<div className={styles.junior}>
				{ask.map((el) => {
					return <Question el={el} key={el.id} />;
				})}
			</div>
		</div>
	);
};
export default Junior;
