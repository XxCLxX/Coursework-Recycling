import React, { useState, useCallback } from 'react'
import FormFillin from './FormFillin'
import FormSuccess from './FormSuccess'
import formPic from '../../images/form-1.svg'
import './Form.css'
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitForm = useCallback(() => {
        setIsSubmitted(true)
    }, [setIsSubmitted])

    const navigate = useNavigate();
    const navigateToDonation = () => {
      navigate('/donation');
    };

    return (
        <>
            <div className='form-container'>
                <span className='close-btn' onClick={navigateToDonation}>x</span>
                <div className='form-content-left'>
                    <img className='form-img' src={formPic} alt='world' />
                </div>
                {!isSubmitted ? <FormFillin submitForm={submitForm} /> : <FormSuccess />}
            </div>
        </>
    )
}

export default Form