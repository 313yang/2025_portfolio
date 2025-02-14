import { useState } from "preact/hooks";
import { BuildClass, checkLinuxCommand } from "../libs/functions";
import style from "../styles/arrow.module.css";
import { Input } from "./input";

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

    const activeEnter = () => {

        const command = checkLinuxCommand(text, dir, (text) => setDir(text));
        typeof command === "string" && setCommand(command);
    };

    return (
        <div className={style.arrow}>
            <div className={BuildClass(style.user, style.arrow)}>
                <p>yang_byeori</p>
            </div>
            <div className={BuildClass(style.dir, style.arrow)}>
                <p>~ {dir && "/" + dir}</p>
            </div>
            <Input
                onEnter={activeEnter}
                defaultValue={text}
                onInput={(value) => setText(value)}
            />
        </div>
    );
}
