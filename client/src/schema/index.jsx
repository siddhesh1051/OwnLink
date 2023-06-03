import * as Yup from 'yup';
export const validationSchema = Yup.object({
    email:Yup.string().email().required('Please enter your email'),
    password:Yup.string().min(6).required('please enter a password'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'),null], 'Passwords must match').required('please confirm your password'),

})

