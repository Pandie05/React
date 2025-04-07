import React, { useState } from 'react';

export const showForm = () => {
  const formContainer = document.querySelector('main');
  formContainer.classList.toggle('hidden');
};

export const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);

    if (formSubmitted || value) {
      if (!value) {
        setFirstNameError('First name is required.');
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setFirstNameError('First name must contain only letters.');
      } else {
        setFirstNameError('');
      }
    }
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);

    if (formSubmitted || value) {
      if (!value) {
        setLastNameError('Last name is required.');
      } else {
        setLastNameError('');
      }
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (formSubmitted || value) {
      if (!value) {
        setEmailError('Email is required.');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = () => {
    setFormSubmitted(true);

    if (!firstName) {
      setFirstNameError('First name is required.');
    }
    if (!lastName) {
      setLastNameError('Last name is required.');
    }
    if (!email) {
      setEmailError('Email is required.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
    }

    if (!firstNameError && !lastNameError && !emailError && firstName && lastName && email) {
      clearForm();
      showForm();
    }
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setFormSubmitted(false);
  };

  return (
    <div className="container">
      <label className="form-label">First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      {firstNameError && <p className="error-message">{firstNameError}</p>}

      <label className="form-label">Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
      />
      {lastNameError && <p className="error-message">{lastNameError}</p>}

      <label className="form-label">Email</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <p className="error-message">{emailError}</p>}

      <button onClick={clearForm} className="button">
        Clear
      </button>
      <button onClick={handleSubmit} className="button">
        SUBMIT
      </button>
    </div>
  );
};

export default SignUpForm;