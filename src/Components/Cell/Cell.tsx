import { TypeData } from '../../Data';

import styles from './Cell.module.scss';

type TypeCell = {
    data: TypeData,
    timePeroid: string,
}

const Cell = ({ data, timePeroid }: TypeCell) => {
    return (
        <div className={styles.container}>
            <img src={data.imgSrc} alt="" />
            <div className={styles.topColor}></div>
            <div className={styles.content}>
                <div className={styles.top}>
                    <span>{data.title}</span>
                    <span>...</span>
                </div>
                <div className={styles.currentHours}>
                    {timePeroid === `daily` && `${data.timeframes.daily.current}hrs`}
                    {timePeroid === `weekly` && `${data.timeframes.weekly.current}hrs`}
                    {timePeroid === `monthly` && `${data.timeframes.monthly.current}hrs`}
                </div>
                <div className={styles.lastWeekHours}>
                    {timePeroid === `daily` && `Last Week - ${data.timeframes.daily.previous}hrs`}
                    {timePeroid === `weekly` && `Last Week - ${data.timeframes.weekly.previous}hrs`}
                    {timePeroid === `monthly` && `Last Week - ${data.timeframes.monthly.previous}hrs`}
                </div>
            </div>
        </div>
    )
}

export default Cell