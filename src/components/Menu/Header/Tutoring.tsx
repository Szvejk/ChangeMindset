import React from 'react';
import styles from '../Header/Tutoring.module.css';
import { BiCopyAlt, BiFile, BiMessageRounded, BiMeteor } from 'react-icons/bi';
const Tutoring = () => {
	return (
		<>
		<section className={styles.tutoringSection}>
			<div className={styles.titleTutoring}>
				<h5 className={styles.titleSmall}>Jak to działa?</h5>
				<h1 className={styles.titleCardSection}>
					Co możemy Ci zaoferować?
				</h1>
			</div>

			<div className={styles.flex}>
				<div className={styles.wrapperCards}>
					<div className={styles.card}>
						<p className={styles.text}>
							<div className={styles.divforFirstCard}>
								<BiCopyAlt />
							</div>
							<h4 className={styles.nameForCard}>
								Relaks w połączeniu z nauką
							</h4>
							Oferujemy kilka możliwości nauki: rozwiązywanie zadań, test,
							prywatny mentoring
						</p>
					</div>
					<div className={styles.card}>
						<p className={styles.text}>
							<div className={styles.divforSecondCard}>
								<BiFile />
							</div>
							<h4 className={styles.nameForCard}>Certyfikaty</h4>
							We are constantly improving the material for the lessons we want
							to pass on to others
						</p>
					</div>
					<div className={styles.card}>
						<p className={styles.text}>
							<div className={styles.divforThirdCard}>
								<BiMessageRounded />
							</div>
							<h4 className={styles.nameForCard}>Prywatny Mentoring</h4>
							Zawsze możesz na nas liczyć! Gdyby pojawiły się pytania podczas
							rozwiązywania zadań, skontaktuj się z nami
						</p>
					</div>
					<div className={styles.card}>
						<p className={styles.text}>
							<div className={styles.divforFourthCard}>
								<BiMeteor />
							</div>
							<h4 className={styles.nameForCard}>Kreatywne myślenie </h4>
							All of our specialists in special education have the best
							educational degrees
						</p>
					</div>
				</div>
			</div>
			</section>
		</>
	);
};

export default Tutoring;
