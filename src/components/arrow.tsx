import { BuildClass } from "../libs/functions";
import style from "../styles/arrow.module.css";

export default function Arrow() {
    return (
        <section className={style.arrow}>
            <div className={BuildClass(style.user, style.arrow)}>
                <p>yang_byeori</p>
            </div>
            <div className={BuildClass(style.dir, style.arrow)}>
                <p>~</p>
            </div>
        </section>
    );
}
