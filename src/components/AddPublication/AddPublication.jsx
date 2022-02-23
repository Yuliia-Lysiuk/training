import { Field, Formik, Form, ErrorMessage } from "formik"
import { createPublication } from "services/API";
import * as Yup from 'yup';
import styled from 'styled-components';

const ErrorText = styled.p`
  color: red;
`;

export function AddPublication() {
    const SignupSchema = Yup.object().shape({
        title: Yup.string()
            .min(6, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        article: Yup.string()
            .min(20, 'Too Short!')
            .required('Required'),
    });

    const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

    const onSubmit = (value, { resetForm }) => {
        createPublication(value);
        resetForm();
    };

    return (
        <div>
            <h2>Add Publication</h2>
            <Formik initialValues={{ title: '', article: '' }}
                validationSchema={SignupSchema}
                onSubmit={(value, { resetForm }) => onSubmit(value, { resetForm })}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="title" placeholder="Title" />
                        <FormError name="title" />
                        <Field as='textarea' type="text" name="article" placeholder="Text" />
                        <FormError name="article" />
                        <button type="submit" disabled={isSubmitting}>{isSubmitting? 'Adding' : 'Add article' }</button>
                </Form>
                )}
            </Formik>

        </div>
    )
}