import { useRef, useState } from 'react';

// Hooks
import useOutsideClick from '../hooks/useClickOutside';

// Assets
import appClasses from '../assets/styles/app.module.scss';
import searchClasses from '../assets/styles/search.module.scss';

export default function Search() {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const searchRef = useRef(null);

    // Use 'useOutsideClick' hook to close the dropdown
    useOutsideClick(searchRef, () => setIsDropdownOpen(false));

    return (
        <section className={searchClasses['search-wrapper']}>
            <div className={appClasses.container}>
                <div ref={searchRef} className={searchClasses['search-container']}>
                    <input
                        className={`${isDropdownOpen ? searchClasses['dropdown-items-hidden'] : ''}`}
                        type="text"
                        placeholder="Search Repositories..."
                        onClick={() => setIsDropdownOpen(true)}
                    />
                    <div className={`
                        ${isDropdownOpen ? '' : searchClasses['dropdown-hidden']}
                        ${searchClasses['dropdown-items-container']}`
                    }>
                        <ul>
                            <li>
                                MAMIK
                            </li>
                            <li>
                                MAMIK
                            </li>
                            <li>
                                MAMIK
                            </li>
                            <li>
                                MAMIK
                            </li>
                            <li>
                                MAMIK
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
