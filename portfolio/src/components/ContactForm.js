import React from 'react';

const ContactForm = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/resume/Legan Daniel Resume.pdf';

    return (
        <div className="contact-form">
            <h2>Contact Me</h2>
            <a href={resumeUrl} download="Legan_Daniel_Resume.pdf">
                <button>Download Resume</button>
            </a>
        </div>
    );
    
};

export default ContactForm;