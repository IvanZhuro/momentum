import { useEffect, useState} from "react"
import style from "./Oclock.module.scss"

export default function Oclock() {
    const [[hours, minutes,seconds], setSeconds] = useState([new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()])
    setInterval(() => {
        const date = new Date()
        return setSeconds([date.getHours(),date.getMinutes(),date.getSeconds()]);
    }, 1000)
    useEffect(()=>{}, [seconds])
    return (
        <div className={style.oclock}><p>{hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p></div>
    )
}