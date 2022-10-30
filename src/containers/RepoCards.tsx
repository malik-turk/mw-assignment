// Components
import RepoCard from "../components/RepoCard"

// Assets
import appClasses from '../assets/styles/app.module.scss';
import repoCardsClasses from '../assets/styles/repo-cards.module.scss';

export default function RepoCards(): JSX.Element {
  return (
    <section className={repoCardsClasses['repo-cards-wrapper']}>
        <div className={`${appClasses.container} ${repoCardsClasses['repo-cards-container']}`}>
            {[1, 2, 3, 4, 5, 6, 6, 7, 8].map(() => (
                <RepoCard />
            ))}
        </div>
    </section>
  )
}
