import { useState } from 'react';
import { data, TypeData } from '../../Data';

import MainCell from '../MainCell/MainCell';
import Cell from '../Cell/Cell';

import styles from './Main.module.scss';

const Main = () => {

    const [selectedTimePeriod, setSelectedTimePeriod] = useState(`weekly`);

    return (
        <section className={styles.container}>
            <MainCell
                timeSelected={selectedTimePeriod}
                setSelectedTimePeriod={setSelectedTimePeriod}
            />
            {data.map((data: TypeData, index: number) => {
                return <Cell
                    data={data}
                    timePeroid={selectedTimePeriod}
                    key={index} />
            })}
        </section>
    )
}

export default Main