import styles from './MainCell.module.scss';

const MainCell = ({
    timeSelected,
    setSelectedTimePeriod,
}: {
    timeSelected: string,
    setSelectedTimePeriod: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <section className={styles.container}>
            <div className={styles.reportSummary}>
                <img src="./images/image-jeremy.png" alt="" />
                <div>Report for</div>
                <div>Jeremy Robson</div>
            </div>
            <div className={styles.timePeroids}>
                <div
                    onClick={() => setSelectedTimePeriod(`daily`)}
                    className={timeSelected === `daily` ? styles.timePeroidsActive : ``}>Daily</div>
                <div
                    onClick={() => setSelectedTimePeriod(`weekly`)}
                    className={timeSelected === `weekly` ? styles.timePeroidsActive : ``}>Weekly</div>
                <div
                    onClick={() => setSelectedTimePeriod(`monthly`)}
                    className={timeSelected === `monthly` ? styles.timePeroidsActive : ``}>Monthly</div>
            </div>
        </section>
    )
}

export default MainCell;