import { useState } from 'react';

// Components
import Header from './components/Header';
import Search from './components/Search';
import RepoCards from './containers/RepoCards';

// Types
import { Repo } from './types/octokit';

function App(): JSX.Element {
  const [selectedRepos, setSelectedRepos] = useState<Repo[]>([]);

  return (
    <main>
      <Header />
      <Search
        selectedRepos={selectedRepos}
        setSelectedRepos={setSelectedRepos}
      />
      <RepoCards
        selectedRepos={selectedRepos}
        setSelectedRepos={setSelectedRepos}
      />
    </main>
  );
}

export default App;
