/* --------------------------- */
/* Project  : React Portfolio  */
/* File     : Contact/index.js */
/* Author   : Vicente Garcia   */
/* Date     : 06/24/2022       */
/* Modified : 06/26/2022       */
/* --------------------------- */
// Import react module
import React, { useState } from 'react';
// Import helpers
import { validateEmail } from '../../utils/helpers';
// Function to show contact form
function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1 className="d-flex column">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <div>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <label htmlFor="email">Email address:</label>
                <div>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <label htmlFor="message">Message:</label>
                <div>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};
// Export contact form
export default ContactForm;