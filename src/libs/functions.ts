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

const dirArray = ["work", "project", "about_me"];

/** 
 * 입력된 문자가 리눅스 명령어인지 판단합니다.
 */
export const checkLinuxCommand = (text: string, currnetDir: string) => {
	console.log("text::", text);
	switch (text.split(" ")[0]) {
		case "ls": return showList(currnetDir);
		case "cd": {
			const findDir = dirArray.find((dir) => text.includes(dir)); // 포함된 디렉토리 찾기
			if (findDir) {
				return "\n";
			}
			return showHelp(); // 포함된 디렉토리가 없으면 아무 작업도 하지 않고 종료
		}
		default: return showHelp();
	}
};

/**
 * `ls` 명령어 입력 시 조회가능한 디렉토리 리스트를 출력합니다
 * @param dir stirng
 * @returns string
 */
export const showList = (dir?: string) => {
	switch (dir) {
		case "work":
			return `\n toonation.txt \n samlab.txt \n `;
		case "project":
			return `\n joomoonmoa.txt \n soundy.txt \n emotion_diary.txt \n find_my_plant.txt \n velog.txt \n`;
		case "about_me":
			return `\n github.txt \n notion.txt \n velog.txt \n`;
		default:
			return `\n ${dirArray.join("\n")}`;
	}
};

/**
 * 지정된 명령어를 제외한 텍스트 입력 시 --help를 반환합니다.
 * @returns string
 */
export const showHelp = () => {
	return `\nComand Option : \n  
	ls: Lists files and directories. \n
	cd: Changes the current directory. \n
	cat: Displays the contents of a file. \n
	`;
};

export const commandCd = () => {

};
