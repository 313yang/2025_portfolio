import { useState } from "preact/hooks";
import { BuildClass, checkLinuxCommand } from "../libs/functions";
import style from "../styles/arrow.module.css";
import { Input } from "./input";

interface ArrowProps {
    /** 마지막 커맨드라인인지 여부를 체크합니다. */
    isLastCommand: boolean,
    setCommand: (text: string) => void,
    dir: string,
    setDir: (text: string) => void;
}

export default function Arrow({
    isLastCommand,
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
                disabled={!isLastCommand} // 마지막 커맨드 라인이 아닌경우 수정불가처리
                onEnter={activeEnter}
                defaultValue={text}
                onInput={(value) => setText(value)}
            />
        </div>
    );
}
