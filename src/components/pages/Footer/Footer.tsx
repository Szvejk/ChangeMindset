import React from 'react';
import Menu from '../../Menu/Nav/Menu';
import styles from './Footer.module.css';
import { useFormik } from 'formik';


// const validate = (values) => {
// 	const errors = {};
// 	if (!values.firstName.length) {
// 		errors.firstName = ' Imię jest wymagane';
// 	} else if (values.firstName.length <= 3) {
// 		errors.firstName = 'za krótkie imie, podaj minimum 4 znaki';
// 	} else if (values.firstName.length > 10) {
// 		errors.firstName =
// 			'Twoje imie jest zbyt długie, podaj maksymalnie 10 znaków';
// 	}
//   if(!values.email.length) {
//     errors.email = 'Email jest wymagany'
//   }
// 	return errors;
// };

const Footer = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			email: '',
		},
		// validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		},
	});

	const firstNameError = formik.errors.firstName ? (
		<p>{formik.errors.firstName}</p>
	) : null;


const emailError = formik.errors.email ?(
  <p>{formik.errors.email}</p>
):null;

	return (
		<>
			<Menu />

			<div className={styles.wrapperContact}>
				<div className={styles.contact}>
					<form onSubmit={formik.handleSubmit}>
						<label>
							<input
								className={formik.errors.firstName ? 'has-error' : ''}
								name='firstName'
								onChange={formik.handleChange}
								type='text'
								value={formik.values.firstName}
							/>
							Imię
						</label>
						<label>
							Email:
							<input 
              className={formik.errors.email ? 'has-error' : ''}
								name='firstName'
								onChange={formik.handleChange}
                type='text'
              value={formik.values.email}
              />
						</label>
						<button type='submit'>Wyślij</button>
					</form>
					{firstNameError}
          {emailError}
				</div>
			</div>
		</>
	);
};

export default Footer;
