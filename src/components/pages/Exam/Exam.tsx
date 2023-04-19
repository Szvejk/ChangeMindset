import React from 'react';
import Menu from '../../Menu/Nav/Menu';
import styles from './Exam.module.css';
const Exam = () => {
	const ask = [
		{
			id: 1,
			zad: 1,
			titleExercise: '	They are arriving __ London on Friday.',
			answers: ['odp1: at', 'odp2:on', 'odp3:in'],
			button: 'Sprawdź',
			correctAnswer: ' odp1:at ',
		},
		{
			id: 2,
			zad: 2,
			titleExercise: 'That suitcase belongs __ me.',
			answers: ['odp1: for', 'odp2:from', 'odp3:to'],
			button: 'Sprawdź',
			correctAnswer: ' odp1:from ',
		},
		{
			id: 3,
			zad: 3,
			titleExercise: 'That suitcase belongs __ me.',
			answers: ['odp1: for', 'odp2:from', 'odp3:to'],
			button: 'Sprawdź',
			correctAnswer: ' odp1:to ',
		},
		{
			id: 6,
			zad: 6,
			titleExercise: 'That suitcase belongs __ me.',
			answers: ['odp1: for', 'odp2:from', 'odp3:to'],
			button: 'Sprawdź',
			correctAnswer: ' odp1:from ',
		},
		{
			id: 4,
			zad: 4,
			titleExercise: '	Do you think ___ are more sensitive than __?',
			answers: [
				'odp1:  women/the men',
				' odp2: women/men',
				'odp3:men/the women',
			],
			button: 'Sprawdź',
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
			button: 'Sprawdź',
			correctAnswer: ' odp1:the end/the world ',
		},
	];
	return (
		<>
			<Menu />

			<div className={styles.wrapperExam}>
				<div className={styles.Exam}>
					{ask.map((el) => {
						return (
						
								<div key={el.id}>
								<span className={styles.titleExercise}>{el.titleExercise}</span>

								<div className={styles.answers}>
									{el.answers.map((el) => {
										return <div className={styles.singleEl}> {el}</div>;
									})}
								</div>

								<button className={styles.showAnswer}>{el.button}</button>
								<div className={styles.correctAnswer}>{el.correctAnswer} </div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Exam;
