import { Suspense, useLayoutEffect, useState } from "preact/compat";
import Loading from "./components/loading";
import { moveCharacter, PositionType } from "./libs/functions";
import Header from "./components/layout/header";
import "./styles/home.css";


const caracterSize = 60;

export function App() {
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });

  useLayoutEffect(() => {
    setPosition({
      x: window.innerWidth / 2 - caracterSize,
      y: window.innerHeight / 2 - caracterSize
    });
    // TODO:: position 이전값과 비교해서 값 달라졌을 때만 리렌더되도록 로직 수정 
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div
        tabIndex={0}
        className="moveContainer"
        onKeyDown={(event) => {
          const updatedPosition = moveCharacter(event, position);
          updatedPosition && setPosition(updatedPosition);
        }}
      >
        <Header location={"top"} />
        <div
          className="character"

          style={{
            width: caracterSize,
            height: caracterSize,
            transform: `translate(${position.x}px, ${position.y}px)`
          }}>
          <p>ABC</p>
        </div>
        <Header location={"bottom"} />
      </div>
    </Suspense>
  );
}
