import * as yup from 'yup';

export const basicSchema = yup.object().shape({
	email: yup.string().email('Please enter a valid email').required('Required'),
	name: yup.string().min(3, "Please enter min 3 characters").required('Required'),
	message: yup.string().min(5).required('Required'),
});
