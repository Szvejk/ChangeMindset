import React from 'react';
import Menu from '../../Menu/Nav/Menu';

import { useFormik } from 'formik';
import { basicSchema } from './schemas/schema';
import styles from './Contact.module.css';
import waves from '../../../img/wavesNegative (1).svg';

type FormValues = {
	name: string;
	email: string;
	message: string;
};

const onSubmit = (values: string, actions: string) => {
	console.log(values);
	console.log(actions);
	// await new Promise((resolve) => setTimeout(resolve, 1000));
	// actions.resetForm()
};

const Contact = () => {
	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleBlur,
		handleChange,
		handleSubmit,
	} = useFormik<FormValues>({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema: basicSchema,

		onSubmit: (values: FormValues) => {
			alert(JSON.stringify(values));
		},
	});
	return (
		<>
			<div className={styles.wrapFlex}>
				<img src={waves} className={styles.wave} alt='' />
				<div className={styles.wrapperForm}>
					<form
						onSubmit={handleSubmit}
						autoComplete='off'
						className={styles.formFlex}
					>
						<div className={styles.emailWrap}>
							<label htmlFor='email' className={styles.header}>
								Email
							</label>

							<input
								value={values.email}
								onChange={handleChange}
								id={styles.email}
								placeholder='Enter your email'
								onBlur={handleBlur}
								name='email'
								className={
									errors.email && touched.email ? styles.inputError : ''
								}
							/>
							{errors.email && touched.email && (
								<p className={styles.error}>{errors.email}</p>
							)}
							{!errors.email && touched.email && <p>Wszystko ok</p>}
						</div>
						<div className={styles.nameWrap}>
							<label htmlFor='name' className={styles.header}>
								Name
							</label>
							<input
								value={values.name}
								onChange={handleChange}
								id={styles.name}
								name='name'
								placeholder='Enter your name'
								className={errors.name && touched.name ? styles.inputError : ''}
							/>{' '}
							{errors.name && touched.name && (
								<p className={styles.error}>{errors.name}</p>
							)}{' '}
						</div>
						<div className={styles.messageWrap}>
							<label htmlFor='message' className={styles.header}>
								Message
							</label>
							<input
								value={values.message}
								onChange={handleChange}
								id={styles.message}
								name='message'
								placeholder='Write your message'
								className={
									errors.message && touched.message ? styles.inputError : ''
								}
							/>{' '}
							{errors.message && touched.message && (
								<p className={styles.error}>{errors.message}</p>
							)}{' '}
						</div>
						<button
							disabled={isSubmitting}
							className={styles.submit}
							type='submit'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
