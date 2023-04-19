import React from 'react';
import styles from '../Header/Tutoring.module.css';
import { BiCopyAlt, BiFile, BiMessageRounded, BiMeteor } from 'react-icons/bi';
const Tutoring = () => {
	const cards = [
		{
			id: 1,
			card: 1,
			icon: <BiCopyAlt />,
			title: 'Relaks w połączeniu z nauką',
			text: 'Oferujemy kilka możliwości nauki: rozwiązywanie zadań, test prywatny mentoring',
		},{
			id:2,
			card:2,
			icon:	<BiFile />,
			title: ' Certyfikaty',
			text: '	We are constantly improving the material for the lessons we want to pass on to others'
		},{
			id:3,
			card:3,
			icon:	<BiMessageRounded />,
			title:"Prywatny Mentoring",
			text:"	Zawsze możesz na nas liczyć! Gdyby pojawiły się pytania podczas rozwiązywania zadań, skontaktuj się z nami"
		}, {
			id:4,
			card:4,
			icon: 	<BiMeteor />,
			title: "Kreatywne myślenie",
			text:"	All of our specialists in special education have the best educational degrees "
		}
	];

	return (
		<>
			<section className={styles.tutoringSection}>
				<div className={styles.titleTutoring}>
					<h5 className={styles.titleSmall}>Jak to działa?</h5>
					<h1 className={styles.titleCardSection}>Co możemy Ci zaoferować?</h1>
				</div>

				<div className={styles.flex}>
					<div className={styles.wrapperCards}>
						{cards.map((el) => {
							return (
								<>
									<div key={el.id}></div>
									<div className={styles.card}>
									<div className={styles.divIcon}>{el.icon} </div>
									<div className={styles.titleCard}> 
									<span className={styles.nameForCard}> {el.title}</span></div>
									<div className={styles.text}> {el.text}</div>
									</div>
								</>
							);
						})}

						
					</div>
				</div>
			</section>
		</>
	);
};

export default Tutoring;
