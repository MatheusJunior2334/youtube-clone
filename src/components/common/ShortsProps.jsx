import styles from '../../styles/ShortsProps.module.scss';

import { ThreeDotsIcon } from '../../assets/icons/main-body/ThreeDotsIcon';

export const ShortsContentProps = ({ shortsUrl, thumbnail, shortsTitle, numberOfViews }) => {
    //Função para abrir o vídeo numa nova guia
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer')
    }

    return (
        <div id={styles.shortsContent} onClick={() => openInNewTab(shortsUrl)}>
            
            <div className={styles.thumbnail}>
                <img src={thumbnail} alt={shortsTitle} />
            </div>

            <div className={styles.shortsDetails}>
                
                <div className={styles.shortsInfo}>
                    <h3 title={shortsTitle}>{shortsTitle}</h3>
                    <span>{numberOfViews} views</span>
                </div>

                <button className={styles.threeDots}>
                    <ThreeDotsIcon />
                </button>
            </div>
        </div>
    )
}