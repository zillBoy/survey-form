import React, { useEffect, useState } from 'react'
import SurveyForm from './SurveyForm'

const Modal = ({closeModal}) => {

    const [formData, setFormData] = useState([])
    
    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <div className="survey-form-div">
            <SurveyForm closeModal={closeModal} getFormData={setFormData} />
        </div>
    )
}

export default Modal
