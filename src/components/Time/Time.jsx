import { useEffect, useState } from "react"
import style from "./Time.module.scss"

export function Time() {
    const date = new Date()
    const [time, setTime] = useState(date)

    const month = {
        0 : 'January',
        1 : 'February',
        2 : 'March',
        3 : 'April',
        4 : 'May',
        5 : '',
        6 : '',
        7 : '',
        8 : '',
        9 : '',
        10 : '',
        11 : '',
    }

    const dayOfWeek = {
        en : {
            0 : 'Monday',
            1 : 'Tuesday',
            2 : 'Wednesday',
            3 : 'Thursday',
            4 : 'Friday',
            5 : 'Saturday',
            6 : 'Sunday',      
        },
        ru : {
            0 : 'Monday',
            1 : 'Tuesday',
            2 : 'Wednesday',
            3 : 'Thursday',
            4 : 'Friday',
            5 : 'Saturday',
            6 : 'Sunday',
        }
    }
    setTimeout(() => setTime(date), 1000)
    return (
        <div className={style.time}>
            <p className={style.hours}>{time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}:{time.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:{time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()}</p>
            <p className={style.days}>{dayOfWeek.en[time.getDay()]}, {month[time.getMonth()]} {time.getDate() }</p>
        </div>
    )
}