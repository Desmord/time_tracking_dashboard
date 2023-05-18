import { useState } from 'react';
import { data, TypeData } from '../../Data';

import MainCell from '../MainCell/MainCell';
import Cell from '../Cell/Cell';

import styles from './Main.module.scss';

const Main = () => {

    const [selectedTimePeriod] = useState(`daily`);

    return (
        <section className={styles.container}>
            <MainCell />
            {data.map((data: TypeData, index: number) => {
                return <Cell timePeroid={selectedTimePeriod} key={index} />
            })}
        </section>
    )
}

export default Main