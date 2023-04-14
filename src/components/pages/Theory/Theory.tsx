import React from 'react';
import Menu from '../../Menu/Nav/Menu';
import styles from './Theory.module.css';

const Theory = () => {
	const theoryTimes = [
		{
			id: 1,
			titleTime: 'Present Continuous',
			time: 'Present Continuous to jeden z pierwszych czasów, jakie poznajemy zaczynając naukę angielskiego. Czas ten najczęściej opisujeczynność, która jest w tej chwili wykonywana. budowa czasu Present Continuous Czas Present Continuous składa się z następujących elementów: podmiot + to be (am/is/are) + czasownik z końcówką -ing Odmiana to be jest prosta – podajemy ją niżej, opisujemy także jak utworzyć czasownik z końcówką -ing.',
		},
		{
			id: 2,
			titleTime: 'Present Simple',
			time: 'Czas Present Simple jest najczęściej używanym czasem teraźniejszym w języku angielskim. Stosujemy go w bardzo wielu sytuacjach, o czym  możecie przeczytać zakładce zastosowanie Present Simple. Można śmiało powiedzieć, że jeśli jesteśmy wprawni w gestykulacji i znamy trochę słownictwa, Present Simple umożliwi nam komunikację która wychodzi daleko poza jego kontekst.',
		},
		{
			id: 3,
			titleTime: 'Present Perfect ',
			time: '	Present Perfect to jeden z najważniejszych czasów w języku angielskim i jego zrozumienie jest ważnym krokiem w nauce języka. Ponieważ w języku polskim nie mamy odpowiednika Present Perfect, czas ten może sprawić pewne trudności, zwłaszcza że w tłumaczeniach na język polski w niektórych sytuacjach używamy czasu przeszłego, a w innych teraźniejszego.',
		},
		{
			id: 4,
			titleTime: 'Present Continuous',
			time: '	Present Continuous to jeden z pierwszych czasów, jakie poznajemy zaczynając naukę angielskiego. Czas ten najczęściej opisuje czynność, która jest w tej chwili wykonywana. budowa czasu Present Continuous Czas Present Continuous składa się z następującychelementów: podmiot + to be (am/is/are) + czasownik z końcówką -ing.Odmiana to be jest prosta – podajemy ją niżej, opisujemy także jak utworzyć czasownik z końcówką -ing.',
		},
		{
			id: 5,
			titleTime: 'Future Simple',
			time: '	Future Simple, czyli czas przyszły prosty, jest bardzo łatwy zarówno w tworzeniu jak i użyciu. Po podmiocie wstawiamy will (we wszystkich  osobach), a po nim czasownik w pierwszej formie.',
		},
		{
			id: 6,
			titleTime: 'Past Continous',
			time: '		Past Continuous jest czasem bardzo podobnym do Present Continuous z tym, że wyraża czynność trwającą określony czas w przeszłości.Różnica tkwi w czasowniku być (to be) - zamiast formy teraźniejszej używamy formy czasu przeszłego. Past Continuous jest czasem niedokonanym.',
		},
	];

	return (
		<>
			<Menu />
			<div className={styles.theoryWrapper}>
				<div className={styles.theory}>
					{theoryTimes.map((el) => {
						return (
							<div key={el.id}>
								<span className={styles.titleTime}>{el.titleTime} </span>
								<p className={styles.time}>{el.time}</p>{' '}
							</div>
						);
					})}
				</div>{' '}
			</div>
		</>
	);
};

export default Theory;
