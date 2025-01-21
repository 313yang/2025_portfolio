import { Suspense, useLayoutEffect, useState } from "preact/compat";
import Loading from "./components/loading";
import { moveCharacter, PositionType } from "./libs/functions";
import Header from "./components/layout/header";
import "./styles/home.css";


const caracterSize = 60;

export function App() {
  const [transform, setTranform] = useState<string>("");
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const x = window.innerWidth / 2 - caracterSize;
    const y = window.innerHeight / 2 - caracterSize;
    setTranform(`translate(${x}px, ${y}px)`);
    setPosition({ x, y });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div
        tabIndex={0}
        className="moveContainer"
        onKeyDown={(event) => setTranform(moveCharacter(event, position) || "")}
      >
        <Header location={"top"} />
        <div
          className="character"

          style={{
            width: caracterSize,
            height: caracterSize,
            transform
          }}>
          <p>ABC</p>
        </div>
        <Header location={"bottom"} />
      </div>
    </Suspense>
  );
}
