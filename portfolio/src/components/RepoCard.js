import React from 'react';

const RepoCard = ({ repo }) => {
    return (
        <div className="repo-card">
            <div className="repo-content">
                <div className="repo-image">
                    <img src={repo.image} />
                </div>
                <div className="repo-details">
                    <h3><a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h3>
                    <p>{repo.description}</p>
                </div>
            </div>
        </div>
    );
};

export default RepoCard;
