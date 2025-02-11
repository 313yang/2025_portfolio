import { Suspense, useEffect, useRef, useState } from "preact/compat";
import Loading from "./components/loading";
import Arrow from "./components/arrow";



export function App() {
  const [command, setCommand] = useState<string[]>([]);
  const [dir, setDir] = useState<string>("");
  const [commandLineCount, setCommandLineCount] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 명령어 입력 시 input 포커스를 마지막 명령어의 input으로 옮깁니다.
    sectionRef.current && (sectionRef.current.lastElementChild?.children[2] as HTMLInputElement).focus();
  }, [commandLineCount]);

  return (
    <Suspense fallback={<Loading />}>
      <Arrow
        setCommand={(text: string) => {
          setCommand((pre) => pre.concat(text));
          setCommandLineCount((pre) => pre += 1);
        }}
        dir={dir}
        setDir={(dir: string) => setDir(dir)}
      />
      {Array.from({ length: commandLineCount }, (_, i) => (
        <section key={i} ref={sectionRef}>
          <p style={{ whiteSpace: "break-spaces", padding: 12 }}>{command[i]}</p>
          <Arrow
            setCommand={(text: string) => {
              setCommand((pre) => pre.concat(text));
              setCommandLineCount((pre) => pre += 1);
            }}
            dir={dir}
            setDir={(dir: string) => setDir(dir)}
          />
        </section>
      ))}
    </Suspense>
  );
}
