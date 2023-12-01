import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/resume/Legan Daniel Resume.pdf';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Daniel Legan',
            message: message
        };

        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log(response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="contact-form">
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Message</label>
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="button-group">
                    <a href={resumeUrl} download="Legan_Daniel_Resume.pdf">
                        <button type="button" className="resume-button">
                            Download My Resume
                        </button>
                    </a>
                    <button type="submit" className="send-button">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
