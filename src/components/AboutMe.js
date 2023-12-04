import React from 'react';

const AboutMe = () => {
    const profileUrl = process.env.PUBLIC_URL + '/images/profile/IMG_4851.jpeg';

    return (
        <div className="about-me">
            <div className="profile-picture-container">
                <img
                    src={profileUrl}
                    alt="Profile Picture"
                    className="profile-picture"
                />
            </div>
            <div className="about-content">
                <h1 className="name">Hi, I'm Daniel.</h1>
                <div className="about-text">
                    <p>
                        I'm a <b>Full-Stack Software Developer</b> based out of Vienna, Virginia. I have a strong focus on React, Node, Express, and SQL but am still exploring other technologies and frameworks that catch my interest!
                        If you're looking for a developer to add to your team, I'd love to hear from you!
                    </p>
                    <p>
                        Prior to transitioning into a developer role, I pursued a career in the medical field as a Medical Technologist. However, this path didn't align with my interests, and I've since discovered a genuine passion for coding and building cool applications.
                    </p>
                    <p>
                        Outside of coding, I love finding reasons to get outdoors and soak up nature, whether it's hiking, biking, or backpacking.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
