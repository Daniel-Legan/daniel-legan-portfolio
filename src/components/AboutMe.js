import React from 'react';

const AboutMe = () => {
    const profileUrl = process.env.PUBLIC_URL + '/images/profile/IMG_4851.jpeg';
    
    return (
        <div className="about-me">
            <img
                src={profileUrl}
                alt="Profile Picture"
                className="profile-picture"
            />
            <h1>About Me</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
                ultrices velit, at varius nulla malesuada non. Etiam vitae lorem vitae
                lectus vehicula accumsan. Proin non convallis lorem.
            </p>
        </div>
        
    );
};

export default AboutMe;
