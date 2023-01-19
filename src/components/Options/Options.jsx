import style from "./Options.module.scss"

export function Options() {
    return (
        <div className={style.options}>
            <div className={style.select_language}>
                <ul>
                    <li>en</li>
                    <li>ru</li>
                </ul>
            </div>
        </div>
    )
}