/**
 * 주어진 문자열들 중 유효한 값들만을 이어서 하나의 문자열로 만듭니다.
 * DOM의 ClassName을 만들 때 사용합니다.
 * @param keepString 이어붙일 class가 없어도 빈 문자열로 반환할지 여부입니다.
 * @param classList 이어붙일 class가 담겨있는 문자열입니다.
 * @returns 만들어진 ClassName 문자열입니다.
 */
export function BuildClass(...classList: Array<string | undefined | null | true | false>): string | undefined {
	let keep = false;
	if (classList[0] === true) keep = true;

	const list = classList.filter(x => x);
	if (list.length > 0) return list.join(" ");
	if (keep) return "";
	return undefined;
}

/** 
 * 입력된 문자가 리눅스 명령어인지 판단합니다.
 */
export const checkLinuxCommand = (text: string) => {
	console.log("text::",text)
	switch (text) {
		case "ls": return showList();
		default: return showHelp();
	}
};

export const showList = () => {
	return `\n work.txt \n project.txt \n about_me.txt \n githun.txt \n velog.txt \n`;

};

export const showHelp = () => {
	return `\nComand Option : \n  
	ls: Lists files and directories. \n
	cd: Changes the current directory. \n
	pwd - Prints the current working directory. \n
	cat - Displays the contents of a file. \n
	`;
};