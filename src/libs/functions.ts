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
 * 새 창으로 윈도우 창을 엽니다.
 * @param url 
 * @returns 
 */
const openWindow = (url: string) => {
	window.open(url, "_blank");
	return "\n";
};

const dirArray = ["work", "project", "about_me"];
const workDir = ["toonation.txt", "samlab.txt"];
const projectDir = ["joomoonmoa.txt", "soundy.txt", "emotion_diary.txt"];
const about_meDir = ["github.txt", "notion.txt", "velog.txt"];

/** 
 * 입력된 문자가 리눅스 명령어인지 판단합니다.
 */
export const checkLinuxCommand = (text: string, currnetDir: string) => {
	switch (text.split(" ")[0]) {
		case "ls": return showList(currnetDir);
		case "cd": return commandCd(text);
		case "cat": return commandCat(text, currnetDir);

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
			return `\n ${workDir.join("\n")}`;
		case "project":
			return `\n ${projectDir.join("\n")}`;
		case "about_me":
			return `\n ${about_meDir.join("\n")}`;
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

/**
 * `cd` 명령어 입력 시 명령어에 포함된 디렉토리로 이동시킵니다.
 * @param text : 입력된 명령어
 * @returns 
 */
const commandCd = (text: string) => {
	const findDir = dirArray.find((dir) => text.includes(dir)); // 포함된 디렉토리 찾기
	if (findDir || text.includes("../")) {
		return "\n";
	}
	return showHelp(); // 포함된 디렉토리가 없으면 아무 작업도 하지 않고 종료
};

/**
 * `cat` 명령어 입력 시 명령어에 포함된 파일을 엽니]다.
 * @param text 
 * @param currnetDir 
 * @returns 
 */
export const commandCat = (text: string, currnetDir: string) => {
	switch (currnetDir) {
		case "work":
			switch (text.split(" ")[1]) {
				case "toonation.txt": return openWindow("https://toonation.co.kr/service/toonation");
				case "samlab.txt": return openWindow("https://samlab.co.kr");
				default: return showHelp();
			}
		case "project":
			switch (text.split(" ")[1]) {
				case "joomoonmoa.txt": return openWindow("https://coconut-answer-2e3.notion.site/15e79093cbf0807795fefc4d99adff57");
				case "soundy.txt": return openWindow("https://coconut-answer-2e3.notion.site/Soundy-9922ee9277c343a797b13903c5000e50?pvs=74");
				case "emotion_diary.txt": return openWindow("https://coconut-answer-2e3.notion.site/eaf6f6950c69464d8aa549513547e7b7");
				default: return showHelp();
			}
		case "about_me":
			switch (text.split(" ")[1]) {
				case "github.txt": return openWindow("https://github.com/313yang");
				case "notion.txt": return openWindow("https://coconut-answer-2e3.notion.site/Frontend-Developer-Yang-Byeori-6ca11f9ef56544acb65844f93293c8ec");
				case "velog.txt": return openWindow("https://velog.io/@313yang/posts");
				default: return showHelp();
			}
	}
};
