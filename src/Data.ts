export type TypeData = {
    title: string,
    timeframes: {
        daily: {
            current: number,
            previous: number
        },
        weekly: {
            current: number,
            previous: number
        },
        monthly: {
            current: number,
            previous: number
        }
    },
    imgSrc: string,
}

export const data = [
    {
        title: `Work`,
        timeframes: {
            daily: {
                current: 5,
                previous: 7
            },
            weekly: {
                current: 32,
                previous: 36
            },
            monthly: {
                current: 103,
                previous: 128
            }
        },
        imgSrc:`./images/icon-work.svg`
    },
    {
        title: `Play`,
        timeframes: {
            daily: {
                current: 1,
                previous: 2
            },
            weekly: {
                current: 10,
                previous: 8
            },
            monthly: {
                current: 23,
                previous: 29
            }
        },
        imgSrc:`./images/icon-play.svg`    
    },
    {
        title: `Study`,
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 7
            },
            monthly: {
                current: 13,
                previous: 19
            }
        },
        imgSrc:`./images/icon-study.svg`   
    },
    {
        title: `Exercise`,
        timeframes: {
            daily: {
                current: 1,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 5
            },
            monthly: {
                current: 11,
                previous: 18
            }
        },
        imgSrc:`./images/icon-exercise.svg`   
    },
    {
        title: `Social`,
        timeframes: {
            daily: {
                current: 1,
                previous: 3
            },
            weekly: {
                current: 5,
                previous: 10
            },
            monthly: {
                current: 21,
                previous: 23
            }
        },
        imgSrc:`./images/icon-social.svg`   
    },
    {
        title: `Self Care`,
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 2,
                previous: 2
            },
            monthly: {
                current: 7,
                previous: 11
            }
        },
        imgSrc:`./images/icon-self-care.svg`   
    }
]