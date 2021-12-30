import React, { useState } from "react";

function ContactForm(props) {

    function validateInfo(event) {
        if(event.target.getAttribute('name') === 'email') {
            if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,5}$/.test(event.target.value.trim())) {
                document.querySelector('#errorMessage').textContent = 'Invalid email address - please try again.';
            } else {
                document.querySelector('#errorMessage').textContent = '';
            }
        } else if(event.target.getAttribute('name') === 'contact-name' || event.target.getAttribute('name') === 'message') {
            if(!event.target.value.trim()) {
                document.querySelector('#errorMessage').textContent = 'Neither the name nor the message can be empty.';
            } else {
                document.querySelector('#errorMessage').textContent = '';
            }
        } else {
            document.querySelector('#errorMessage').textContent = '';
        }
    }
    return(
        <div className="flex-row" id="contact">
            <h2 className="flex-title">Contact</h2>
            <form className="flex-column-start-left" id="flex-contact">
                <div>
                    <label htmlFor="contact-name">Name: </label>
                    <input type="text" name="contact-name" placeholder="Your Name" className="width300" onBlur={validateInfo} required/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" className="width300" onBlur={validateInfo} required/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" className="width300" onBlur={validateInfo} required></textarea>
                </div>
                <div id="errorMessage" className="red-pill-font"></div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;