// Components
import Header from './components/Header';
import Search from './components/Search';
import RepoCards from './containers/RepoCards';

function App(): JSX.Element {
  return (
    <main>
      <Header />
      <Search />
      <RepoCards />
    </main>
  );
}

export default App;
