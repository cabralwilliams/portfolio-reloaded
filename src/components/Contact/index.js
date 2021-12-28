import React, { useState } from "react";

function ContactForm(props) {

    return(
        <form className="flex-column">
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
    );
}

export default ContactForm;