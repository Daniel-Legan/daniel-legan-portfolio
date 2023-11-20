import React from 'react';
import './App.css';
import reposData from './reposData';
import AboutMe from './components/AboutMe';
import RepoCard from './components/RepoCard';
import NavBar from './components/NavBar';

const App = () => {
  const featuredRepos = reposData;

  return (
    <div>
      <NavBar />
      <div className="app">
        <AboutMe />
        <div className="repos-container">
          <h2>Featured Repositories</h2>
          <div className="repo-cards">
            {featuredRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;