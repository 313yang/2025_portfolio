import { Suspense, useLayoutEffect, useRef, useState } from "preact/compat";
import Loading from "./components/loading";
import Arrow from "./components/arrow";

export function App() {
  const [command, setCommand] = useState<string>("");
  const [dir, setDir] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    inputRef && inputRef.current && inputRef.current.focus();
  }, [command]);
  return (
    <Suspense fallback={<Loading />}>
      <Arrow setCommand={(text: string) => setCommand((pre) => pre += text)} />
      {!!command &&
        <>
          <section>
            <p style={{ whiteSpace: "break-spaces", padding: 12 }}>{command}</p>
          </section>
          <Arrow inputRef={inputRef} setCommand={(text: string) => setCommand((pre) => pre += text)} />
        </>}
    </Suspense>
  );
}
