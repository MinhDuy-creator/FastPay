import * as Yup from 'yup';
 
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const SignUpSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(5, 'Name Too Short!')
    .max(50, 'Name Too Long!')
    .required('Required'),
  phonenum: Yup.string()
    .required('Required')
    .min(10, 'Phone Should have 10 number!')
    .max(10, 'Phone Should have 10 number!!')
    .matches(phoneRegExp, 'Phone number is not valid'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required'),
  confirm_password: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords not match')
 });