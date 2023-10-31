import styles from './MainHomePage.module.scss';
import { SideOptions } from './sideOptions/SideOptions';
import { MainBody } from "./mainBody/MainBody"

export const MainHomePage = () => {
    return (
        <main id={styles.mainContent}>
            <SideOptions />
            <MainBody />
        </main>
    )
}