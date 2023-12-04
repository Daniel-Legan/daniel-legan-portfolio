import React from 'react';
import reposData from '../reposData';
import RepoCard from './RepoCard';

const Repos = () => {
    const featuredRepos = reposData;

    return (
        <div className="repos-container">
            <h2><u>Projects</u></h2>
            <div className="repo-cards">
                {featuredRepos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    );
};

export default Repos;