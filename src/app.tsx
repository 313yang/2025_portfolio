import { Suspense, useState } from "preact/compat";
import Loading from "./components/loading";
import { MoveCharacter } from "./libs/functions";
import Header from "./components/layout/header";

export function App() {
  const [transform, setTransform] = useState<string>("");
  console.log(transform);
  return (
    <Suspense fallback={<Loading />}>
      <Header location={"top"} />
      <>
        <div
          onKeyDownCapture={(event) => { console.log(event); }}
          onKeyUp={(event) => { console.log(event); }}
          onKeyDown={(event) => { console.log(event); setTransform(MoveCharacter(event)); }}
          style={{ width: 100, height: 100, transform: transform }}>
          <p>ggg</p>
        </div>
      </>
      <Header location={"bottom"} />
    </Suspense>
  );
}
