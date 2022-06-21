import React from 'react';
import './Form.css';
import successPic from '../../images/form-2.svg'

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Thank you! <br/> We have received your request!</h1>
      <img className='form-img-2' src={successPic} alt='success' />
    </div>
  );
};

export default FormSuccess;