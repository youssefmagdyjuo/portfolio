import React from 'react'
import { Form, Field, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { useForm, ValidationError } from '@formspree/react';
import Toast from './Toast';
export default function Contact() {
    const [state, handleSubmit] = useForm("xrbywlld");
    if (state.succeeded) {
        // <Toast message={'done'}/>
    }
    return (
        <div className='p-2' id='contact'>
            {state.succeeded && (
                <Toast
                    message="Message sent successfully!"
                    type="success"
                    onClose={() => { }}
                />
            )}
            <h1 className='title'>Contact <span className='text-[var(--white)]'>Me</span></h1>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    message: Yup.string()
                        .max(500, 'Must be 500 characters or less')
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting,resetForm }) => {
                    setTimeout(() => {
                        handleSubmit(values);
                        setSubmitting(false);
                        resetForm();
                    }, 400);
                }}
            >
                <Form>
                    <Field type='text' name='name' placeholder='Your Name' />
                    <ErrorMessage name='name' />
                    <Field type='email' name='email' placeholder='Your Email' />
                    <ErrorMessage name='email' />
                    <Field as="textarea" name='message' placeholder='Your Message...' />
                    <ErrorMessage name='message' />
                    <button type="submit">Send</button>
                </Form>
            </Formik>
        </div>
    )
}
