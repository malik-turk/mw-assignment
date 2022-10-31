// Assets
import repoCardClasses from '../assets/styles/repo-card.module.scss';
import GithubStar from '../assets/images/github-star.svg';

// Types
import { Repo } from '../types/octokit';

// Utils
import { calculateDate } from '../utils/date-calculation';

export default function RepoCard({ repo }: { repo: Repo }): JSX.Element {
    const repoDetails = [
        {
            icon: GithubStar,
            title: 'Stars',
            value: repo.stargazers_count?.toLocaleString()
        },
        {
            icon: GithubStar,
            title: 'Forks',
            value: repo.forks?.toLocaleString()
        },
        {
            icon: GithubStar,
            title: 'Open Issues',
            value: repo.open_issues?.toLocaleString()
        },
        {
            icon: GithubStar,
            title: 'Age',
            value: calculateDate(new Date(repo.created_at || ''))
        },
        {
            icon: GithubStar,
            title: 'Last Commit',
            value: calculateDate(new Date(repo.updated_at || ''))
        },
        {
            icon: GithubStar,
            title: 'Licence',
            value: repo.license.name
        },
        {
            icon: GithubStar,
            title: 'Language',
            value: repo.language
        },
    ];
 
    return (
        <div className={repoCardClasses['repo-card-wrapper']}>
            <div className={repoCardClasses['repo-card__header']}>
                <h3>{repo.full_name}</h3>
            </div>
            <div className={repoCardClasses['repo-card__body']}>
                {repoDetails.map((repoDetail) => (
                    <div className={repoCardClasses['repo-card__body-item']}>
                        <span className={repoCardClasses['repo-card__item-content']}>
                            <img src={repoDetail.icon} alt="" />
                            <span>{repoDetail.title}</span>
                        </span>
                        <span>{repoDetail.value?.toLocaleString()}</span>
                    </div>
                ))}
            </div>
            <div className={repoCardClasses['repo-card__actions']}>
                <button>Remove Repo</button>
            </div>
        </div>
    )
}
