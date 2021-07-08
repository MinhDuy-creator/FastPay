import * as Yup from 'yup';
 
export const SignUpSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phonenum: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required'),
  confirm_password: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords not match match')
 });