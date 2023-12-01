import React from 'react';

const AboutMe = () => {
    const profileUrl = process.env.PUBLIC_URL + '/images/profile/IMG_4851.jpeg';

    return (
        <div className="about-me">
            <div className="about-content">
                <h1>Hey, I'm Dan.</h1>
                <p>
                    I'm a software developer with a focus on React, Node, Express, and SQL but still exploring other technologies and frameworks that catch my interest!
                    If you're looking for a developer to add to your team, I'd love to hear from you!
                </p>
                <p>
                    Outside of coding, I love finding reasons to get outdoors and soak up nature, whether it's hiking or biking.
                </p>
            </div>
            <div className="profile-picture-container">
                <img
                    src={profileUrl}
                    alt="Profile Picture"
                    className="profile-picture"
                />
            </div>
        </div>
    );
};

export default AboutMe;
