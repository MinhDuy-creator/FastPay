import * as Yup from 'yup';
 
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const SignUpSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phonenum: Yup.string()
    .required('Required')
    .string().matches(phoneRegExp, 'Phone number is not valid'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required'),
  confirm_password: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords not match match')
 });