// Assets
import appClasses from '../assets/styles/app.module.scss';
import headerClasses from '../assets/styles/header.module.scss';
import HeaderImage from '../assets/images/github-header.svg';

export default function Header(): JSX.Element {
    return (
        <header className={headerClasses['header-wrapper']}>
            <div className={appClasses.container}>
                <div className={headerClasses['header-container']}>
                    <h1>GitHub Repos Comparison</h1>
                    <img src={HeaderImage} alt="header" />
                </div>
            </div>
        </header>
    )
}
