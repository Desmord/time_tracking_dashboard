import styles from './MainCell.module.scss';

const MainCell = () => {
    return (
        <section className={styles.container}>
            <div className={styles.reportSummary}>
                <div>img</div>
                <div>Report fro</div>
                <div>Jeremy Robson</div>
            </div>
            <div className={styles.timePeroids}>
                <div>Daily</div>
                <div>Weekly</div>
                <div>Monthly</div>
            </div>
        </section>
    )
}

export default MainCell;