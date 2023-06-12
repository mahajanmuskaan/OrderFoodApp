import React, { useState } from 'react';

export const SignUpComponent = () => {

    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [firstNameText, setFirstNameText] = useState('');
    const [lastNameText, setLastNameText] = useState('');


    const firstNameChange = (e) => {
        setFirstNameText(e.target.value);
    }

    const lastNameChange = (e) => {
        setLastNameText(e.target.value);
    }

    const emailChange = (e) => {
        setEmailText(e.target.value);
    }

    const passwordChange = (e) => {
        setPasswordText(e.target.value);
    }

    const showError = (fieldId) => {
        const field = document.getElementById(fieldId);
        field.classList.add('error');
    };

    const validateForm = (firstNameText, lastNameText, emailText, passwordText) => {
        let isValid = true;

        if (firstNameText === '') {
            showError('inputFirstName');
            isValid = false;
        }

        if (lastNameText === '') {
            showError('inputLastName');
            isValid = false;
        }

        if (emailText === '') {
            showError('inputEmail4');
            isValid = false;
        }

        if (passwordText === '') {
            showError('inputPassword4');
            isValid = false;
        }

        return isValid;
    };

    const checkSignUp = (firstNameText, lastNameText, emailText, passwordText) => {
        const isValid = validateForm(firstNameText, lastNameText, emailText, passwordText);

        if (isValid) {
            document.getElementById('inputFirstName').classList.remove('error');
            document.getElementById('inputLastName').classList.remove('error');
            document.getElementById('inputEmail4').classList.remove('error');
            document.getElementById('inputPassword4').classList.remove('error');
            console.log('Form submitted successfully!!');
        }
    };


    return (
        <>
            <div className='container'>
                <div className="box-form ">
                    <h1>Hey, Welcome!</h1>
                    <div>
                        <h3>SignUp Here!</h3>
                    </div>
                    <form className="row g-6 px-1">
                        <div className="col-md-6">
                            <label htmlFor="inputFirstName" className="form-label text-style">First Name</label>
                            <input type="text" className="form-control" id="inputFirstName" value={firstNameText} onChange={firstNameChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputLastName" className="form-label text-style">Last Name</label>
                            <input type="text" className="form-control" id="inputLastName" value={lastNameText} onChange={lastNameChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label text-style">Email</label>
                            <input type="text" className="form-control" id="inputEmail4" value={emailText} onChange={emailChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label text-style">Password</label>
                            <input type="text" className="form-control" id="inputPassword4" value={passwordText} onChange={passwordChange} />
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputAddress" className="form-label text-style">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputCity" className="form-label text-style">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-12 text-center">
                            <button type="button" className="btn btn-primary btn-lg sign-in" onClick={() => { checkSignUp(firstNameText, lastNameText, emailText, passwordText) }}>Sign Up</button>
                        </div>
                    </form>

                    <h4>Already have an account? Login</h4>

                </div>
            </div>
        </>
    )
}

export default SignUpComponent;