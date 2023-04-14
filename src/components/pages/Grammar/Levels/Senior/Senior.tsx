import React from 'react';
import styles from './senior.module.css';
const senior = () => {



	// const boxes=[{
	// 	id: 1,
	// 	icon: <HiUserGroup/>,
	// 	endCount: 100,
	// 	text: "Nasi użytkownicy"
	//   },{
	// 	id: 2,
	// 	icon: <HiHeart /> ,
	// 	endCount: 200,
	// 	text: "Wkładamy w naszą pracę całe serce"
	//   },{
	// 	id: 3,
	// 	icon:  <HiStar />,
	// 	endCount: 300,
	// 	text: "Jesteśmy oceniani na 5 gwiazdek"
	//   }]
	  
	//   const Society = () => {
	  
	//   let interval = 5000;
	  
	  
// const ask=[{
// id:1,
// zad:1,
// titleExercise:"	They are arriving __ London on Friday.",

// button:"Sprawdź odpowiedzi"
// }]

// return(
// 	<div className={styles.wrapperSenior}>
// {ask.map(el=>{
// 	return <div key={el.id}>
// <span className={styles.titleExercise}>{el.titleExercise}</span>
// <div className={styles.answers}>

// </div>
// <button>{el.button}</button>
// </div>
// })}

	
// )




	return (
		<div className={styles.wrapperSenior}>
			<div className={styles.zad}>
				<h5 className={styles.titleExercise}>
					They are arriving __ London on Friday.
				</h5>
				<p>a. at</p>
				<p>b. on</p>
				<p>c. in</p>
			</div>
			<button className={styles.checkAnswers1}>Sprawdź odpowiedź</button>
		

	


			<div className={styles.zad2}>
				<h5 className={styles.titleExercise}>That suitcase belongs __ me.</h5>
				<p>a. for</p>
				<p>b. from</p>
				<p>c. to</p>
			</div>
			<button className={styles.checkAnswers2}>Sprawdź odpowiedź</button>
			<div className='answersEx2'></div>

			<div className={styles.zad3}>
				<h5 className={styles.titleExercise}>
					I can't choose __ the green one or the blue one.
				</h5>
				<p>a. betweem</p>
				<p>b. of</p>
				<p>c. with</p>
			</div>
			<button className={styles.checkAnswers3}>Sprawdź odpowiedź</button>
			<div className='answersEx3'></div>

			<div className={styles.zad4}>
				<h5 className={styles.titleExercise}>
					Do you think ___ are more sensitive than __?
				</h5>
				<p>a. women/the men</p>
				<p>b. women/men</p>
				<p>c.men/the women</p>
			</div>
			<button className={styles.checkAnswers4}>Sprawdź odpowiedź</button>
			<div className='answersEx4'></div>

			<div className={styles.zad5}>
				<h5 className={styles.titleExercise}>
					Don't worry! It's not ___ of ___.
				</h5>
				<p>a. the end/world</p>
				<p>b. the world/the end</p>
				<p>c. the end/the world</p>
			</div>
			<button className={styles.checkAnswers5}>Sprawdź odpowiedź</button>
			<div className='answersEx5'></div>
      
			<div className={styles.zad6}>
				<h5 className={styles.titleExercise}>
					Richard ___ on his computer at 9 o'clock yesterday.
				</h5>
				{/* Richard was working on his computer at 9 o’clock yesterday. */}
			</div>
			<button className={styles.checkAnswers6}>Sprawdź odpowiedź</button>
			<div className='answersEx6'></div>

			<div className={styles.zad7}>
				<h5 className={styles.titleExercise}>lucy and Tom __ dinner.</h5>
				{/* Lucy and Tom were having dinner. */}
			</div>
			<button className={styles.checkAnswers7}>Sprawdź odpowiedź</button>
			<div className='answersEx7'></div>

			<div className={styles.zad8}>
				<h5 className={styles.titleExercise}>
					I __ an article in the newspaper.
				</h5>
				{/* I was reading an article in the newspaper. */}
			</div>
			<button className={styles.checkAnswers8}>Sprawdź odpowiedź</button>
			<div className='answersEx8'></div>
		</div>
	); }


export default senior;
