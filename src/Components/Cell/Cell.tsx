import styles from './Cell.module.scss';

type TypeCell = {
    timePeroid: string
}

const Cell = ({ timePeroid }: TypeCell) => {
    return (
        <div className={styles.container}>
            <div className={styles.topColor}></div>
            <div className={styles.content}>
                <div className={styles.top}>
                    <span>Work</span>
                    <span>...</span>
                </div>
                <div className={styles.currentHours}>32hrs</div>
                <div className={styles.lastWeekHours}>Last week - 36hrs</div>
            </div>


            {/* {timePeroid === `daily` && `dzien`}
            {timePeroid === `weekly` && `tydzien`}
            {timePeroid === `monthly` && `miesiac`} */}
        </div>
    )
}

export default Cell