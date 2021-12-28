import React, { useState } from "react";

function ContactForm(props) {

    return(
        <div className="flex-row" id="contact">
            <h2 className="flex-title">Contact</h2>
            <form className="flex-column flex-content">
                <div>
                    <label htmlFor="contact-name">Name: </label>
                    <input type="text" name="contact-name" placeholder="Your Name" className="width200" />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" className="width200" />
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" className="width200"></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;