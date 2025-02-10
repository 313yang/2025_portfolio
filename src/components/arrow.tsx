import { useLayoutEffect, useState } from "preact/hooks";
import { BuildClass, checkLinuxCommand } from "../libs/functions";
import style from "../styles/arrow.module.css";

export default function Arrow({ inputRef, setCommand }: { inputRef?: any, setCommand: any; }) {
    const [text, setText] = useState<string>("");

    const activeEnter = (e: any) => {
        if (e.key === "Enter") {
            setCommand(checkLinuxCommand(text));
        }
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const value = target.value.slice(0);
        setText(value);
    };

    console.log("inputRef",inputRef)
    return (
        <section className={style.arrow}>
            <div className={BuildClass(style.user, style.arrow)}>
                <p>yang_byeori</p>
            </div>
            <div className={BuildClass(style.dir, style.arrow)}>
                <p>~</p>
            </div>
            <input
                ref={inputRef}
                defaultValue={text}
                onChange={inputHandler}
                onKeyDown={(e) => activeEnter(e)}
            />
        </section>
    );
}
