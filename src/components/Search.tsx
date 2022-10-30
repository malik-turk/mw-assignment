import { useRef, useState } from 'react';

// Hooks
import useOutsideClick from '../hooks/useClickOutside';
import useFetchRepos from '../hooks/useFetchRepos';

// Utils
import { debounce } from '../utils/debounce';

// Assets
import appClasses from '../assets/styles/app.module.scss';
import searchClasses from '../assets/styles/search.module.scss';

// Types
import { Repo } from '../types/octokit';

export default function Search() {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const { fetchRepos, data } = useFetchRepos();
    const searchRef = useRef(null);

    // Use 'useOutsideClick' hook to close the dropdown
    useOutsideClick(searchRef, () => setIsDropdownOpen(false));

    /**
     * Fetch repos when user ends typing
     */
    const handleSearchInput = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        fetchRepos(e.target.value);
    }, 500);

    return (
        <section className={searchClasses['search-wrapper']}>
            <div className={appClasses.container}>
                <div ref={searchRef} className={searchClasses['search-container']}>
                    <input
                        className={`${isDropdownOpen && data.items?.length ? searchClasses['dropdown-items-hidden'] : ''}`}
                        type="text"
                        placeholder="Search Repositories..."
                        onClick={() => setIsDropdownOpen(true)}
                        onChange={handleSearchInput}
                    />
                    <div className={`
                        ${isDropdownOpen && data.items?.length ? '' : searchClasses['dropdown-hidden']}
                        ${searchClasses['dropdown-items-container']}`
                    }>
                        <ul>
                            {data.items?.map((repo: Repo) => <li key={repo.id}>{repo.full_name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
