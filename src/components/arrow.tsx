import { useState } from "preact/hooks";
import { BuildClass, checkLinuxCommand } from "../libs/functions";
import style from "../styles/arrow.module.css";

interface ArrowProps {
    setCommand: (text: string) => void,
    dir: string,
    setDir: (text: string) => void;
}

export default function Arrow({
    setCommand,
    dir,
    setDir,
}: ArrowProps) {
    const [text, setText] = useState<string>("");

    const activeEnter = (e: any) => {
        if (e.key === "Enter") {
            const command = checkLinuxCommand(text, dir, (text) => setDir(text));
            typeof command === "string" && setCommand(command);
        }
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const value = target.value.slice(0);
        setText(value);
    };

    return (
        <div className={style.arrow}>
            <div className={BuildClass(style.user, style.arrow)}>
                <p>yang_byeori</p>
            </div>
            <div className={BuildClass(style.dir, style.arrow)}>
                <p>~ {dir && "/" + dir}</p>
            </div>
            <input
                defaultValue={text}
                onChange={inputHandler}
                onKeyDown={(e) => activeEnter(e)}
            />
        </div>
    );
}
