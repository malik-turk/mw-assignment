// Assets
import appClasses from '../assets/styles/app.module.scss';
import searchClasses from '../assets/styles/search.module.scss';

export default function Search() {
    return (
        <section className={searchClasses['search-wrapper']}>
            <div className={appClasses.container}>
                <div className={searchClasses['search-container']}>
                    <input type="text" placeholder="Search Repositories..." />
                </div>
            </div>
        </section>
    )
}
