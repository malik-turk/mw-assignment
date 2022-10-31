// Assets
import repoCardClasses from '../assets/styles/repo-card.module.scss';
import GithubStar from '../assets/images/github-star.svg';
import GithubFork from '../assets/images/github-fork.svg';
import GithubIssues from '../assets/images/github-issues.svg';
import GithubAge from '../assets/images/github-age.svg';
import GithubLicence from '../assets/images/github-licence.svg';
import GithubLanguage from '../assets/images/github-language.svg';

// Types
import { Repo } from '../types/octokit';

// Utils
import { calculateDate } from '../utils/date-calculation';

export default function RepoCard({ repo, selectedRepos, setSelectedRepos }: any): JSX.Element {
    const repoDetails = [
        {
            icon: GithubStar,
            title: 'Stars',
            value: repo.stargazers_count?.toLocaleString()
        },
        {
            icon: GithubFork,
            title: 'Forks',
            value: repo.forks?.toLocaleString()
        },
        {
            icon: GithubIssues,
            title: 'Open Issues',
            value: repo.open_issues?.toLocaleString()
        },
        {
            icon: GithubAge,
            title: 'Age',
            value: calculateDate(new Date(repo.created_at || ''))
        },
        {
            icon: GithubAge,
            title: 'Last Commit',
            value: calculateDate(new Date(repo.updated_at || ''))
        },
        {
            icon: GithubLicence,
            title: 'Licence',
            value: repo.license?.name
        },
        {
            icon: GithubLanguage,
            title: 'Language',
            value: repo.language
        },
    ];

    /**
     * Remove card based on given id
     * @param id id of the repo
     */
    const handleRemoveRepo = (id: number): void => {
        setSelectedRepos(selectedRepos.filter((selectedRepo: Repo) => selectedRepo.id !== id));
    }

    return (
        <div className={repoCardClasses['repo-card-wrapper']}>
            <div className={repoCardClasses['repo-card__header']}>
                <h3>{repo.full_name}</h3>
            </div>
            <div className={repoCardClasses['repo-card__body']}>
                {repoDetails.map((repoDetail) => (
                    <div key={repoDetail.title} className={repoCardClasses['repo-card__body-item']}>
                        <span className={repoCardClasses['repo-card__item-content']}>
                            <img src={repoDetail.icon} alt="" />
                            <span>{repoDetail.title}</span>
                        </span>
                        <span>{repoDetail.value?.toLocaleString()}</span>
                    </div>
                ))}
            </div>
            <div className={repoCardClasses['repo-card__actions']}>
                <button onClick={() => handleRemoveRepo(repo.id)}>Remove Repo</button>
            </div>
        </div>
    )
}
