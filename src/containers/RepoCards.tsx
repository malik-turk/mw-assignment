// Components
import RepoCard from "../components/RepoCard"

// Assets
import appClasses from '../assets/styles/app.module.scss';
import repoCardsClasses from '../assets/styles/repo-cards.module.scss';

// Types
import { RepoCardsProps } from '../types/repo-cards';

export default function RepoCards({ setSelectedRepos, selectedRepos }: RepoCardsProps): JSX.Element {
  if (!selectedRepos.length) {
    return (
      <div className={repoCardsClasses['no-repos-state']}>There aren't any repos  yet!</div>
    )
  }

  return (
    <section className={repoCardsClasses['repo-cards-wrapper']}>
        <div className={`${appClasses.container} ${repoCardsClasses['repo-cards-container']}`}>
            {selectedRepos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </div>
    </section>
  )
}
