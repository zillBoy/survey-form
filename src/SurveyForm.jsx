import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const SurveyForm = ({getFormData, closeModal}) => {
    return(
        <Formik
            initialValues={{firstName: "", lastName: "", email: ""}}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .required("Required"),
                lastName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
                email: Yup.string()
                    .email("Invalid email")
                    .required("Required")
            })}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    getFormData(values)
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                }, 400)
            }} >
            <Form className="form-component">

                <h1 className="heading-form">SURVEY FORM</h1>

                <div className="center">
                    <Field name="firstName" type="text" className="input-form" placeholder="First Name" />
                    <ErrorMessage name="firstName" />
                </div>

                <div className="center">
                    <Field name="lastName" type="text" placeholder="Last Name" className="input-form" />
                    <ErrorMessage name="lastName" />
                </div>

                <div className="center">
                    <Field name="email" type="email" placeholder="Email" className="input-form" />
                    <ErrorMessage name="email" />    
                </div>

                <button type="submit" className="btn-form" >Submit</button>
                <button onClick={() => closeModal(false)} type="button" className="btn-form">Back</button>
            </Form>
        </Formik>
    );
}

export default SurveyForm