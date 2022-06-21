import React from 'react'
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormFillin = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Get started with us today! Donate by filling out the information below.</h1>

                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email address'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='firstname' className='form-label'>First Name</label>
                    <input
                        id='firstname'
                        type='text'
                        name='firstname'
                        className='form-input'
                        placeholder='Enter your First name'
                        value={values.firstname}
                        onChange={handleChange}
                    />
                    {errors.firstname && <p>{errors.firstname}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='lastname' className='form-label'>Last Name</label>
                    <input
                        id='lastname'
                        type='text'
                        name='lastname'
                        className='form-input'
                        placeholder='Enter your Last name'
                        value={values.lastname}
                        onChange={handleChange}
                    />
                    {errors.lastname && <p>{errors.lastname}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='hostel' className='form-label'>Hostel</label>
                    <select
                        id='hostel'
                        name='hostel'
                        className='form-input'
                        value={values.hostel}
                        onChange={handleChange}>

                        <option value="parus">Parus</option>
                        <option value="mayak">Mayak</option>
                    </select>
                </div>

                <div className='form-inputs'>
                    <label htmlFor='pickup' className='form-label'>Dorm Room No.</label>
                    <input
                        id='dormroom'
                        type='text'
                        name='dormroom'
                        className='form-input'
                        placeholder='Enter your room no.'
                        value={values.dormroom}
                        onChange={handleChange}
                    />
                    {errors.dormroom && <p>{errors.dormroom}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='pickup' className='form-label'>Pickup Date</label>
                    <input
                        id='pickup'
                        type='text'
                        name='pickup'
                        className='form-input'
                        placeholder='DD/MM/YYYY'
                        value={values.pickup}
                        onChange={handleChange}
                    />
                    {errors.pickup && <p>{errors.pickup}</p>}
                </div>

                <button className='form-input-btn' type='submit'>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default FormFillin