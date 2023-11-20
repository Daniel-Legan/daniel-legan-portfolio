import React from 'react';

const RepoCard = ({ repo }) => {
    return (
        <div className="repo-card">
            <h3>
                <a href={repo.url}>{repo.name}</a>
            </h3>
            <p>{repo.description}</p>
            {/* Display other information about the repo */}
        </div>
    );
};

export default RepoCard;
