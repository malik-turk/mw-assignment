// Assets
import repoCardClasses from '../assets/styles/repo-card.module.scss';
import GithubStar from '../assets/images/github-star.svg';

export default function RepoCard(): JSX.Element {
    return (
        <div className={repoCardClasses['repo-card-wrapper']}>
            <div className={repoCardClasses['repo-card__header']}>
                <h3>facebook/react</h3>
            </div>
            <div className={repoCardClasses['repo-card__body']}>
                {[1, 2, 3, 4, 5, 6, 7].map(() => (
                    <div className={repoCardClasses['repo-card__body-item']}>
                        <span className={repoCardClasses['repo-card__item-content']}>
                            <img src={GithubStar} alt="" />
                            <span>Stars</span>
                        </span>
                        <span>
                            190,123
                        </span>
                    </div>
                ))}
            </div>
            <div className={repoCardClasses['repo-card__actions']}>
                <button>Remove Repo</button>
            </div>
        </div>
    )
}
