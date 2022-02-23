import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';


const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const FormikPage = ({informSubmit}) => {
    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        rating: Yup.number()
            .min(1)
            .max(10)
            .required(),
    });

     return <Formik initialValues={{ email: '', password: '' , rating: 1}}
       validationSchema={SignupSchema}
       onSubmit={(values, { resetForm }) => {
           informSubmit(values);
           resetForm()
       }}>   
     <Form>
           <Field type="email" name="email" />
           <FormError name="email" />
           <Field type="password" name="password" />
             <FormError name="password" />
             <Field name="rating" type="number" placeholder="Rating" />
           <button type="submit" >
             Submit
           </button>
         </Form>
      
    </Formik> 
}