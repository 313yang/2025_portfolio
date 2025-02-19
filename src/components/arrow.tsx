import { useState } from "preact/hooks";
import { BuildClass, checkLinuxCommand } from "../libs/functions";
import style from "../styles/arrow.module.css";
import { Input } from "./input";

interface ArrowProps {
    /** 마지막 커맨드라인인지 여부를 체크합니다. */
    isLastCommand: boolean,
    setCommand: (text: string) => void,
    currentDir?: string,
    dir: string[];
    setDir: (text: string[]) => void;
}

export default function Arrow({
    isLastCommand,
    setCommand,
    dir,
    currentDir = "",
    setDir,
}: ArrowProps) {
    const [text, setText] = useState<string>("");

    const activeEnter = () => {
        const command = checkLinuxCommand(text, currentDir);
        if (typeof command === "string") {
            setCommand(command);
            const isBack = text.includes("../"); // 디렉토리 뒤로가기
            setDir([...dir, (isBack ? "" : currentDir) || (isBack ? "" : text.split(" ")[1])]);
        };
    };

    return (
        <div className={style.arrow}>
            <div className={BuildClass(style.user, style.arrow)}>
                <p>yang_byeori</p>
            </div>
            <div className={BuildClass(style.dir, style.arrow)}>
                <p>~ {!!currentDir && "/" + currentDir}</p>
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
