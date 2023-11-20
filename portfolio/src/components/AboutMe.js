import React from 'react';

const AboutMe = () => {
    return (
        <div className="about-me">
            {/* Replace 'TBD' with the path or URL to profile picture */}
            <img
                src="TBD"
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
