import { Suspense, useLayoutEffect, useRef, useState, KeyboardEvent} from "preact/compat";
import Loading from "./components/loading";
import { moveCharacter, PositionType } from "./libs/functions";
import Header from "./components/layout/header";
import "./styles/home.css";


const caracterSize = 60;

export function App() {
  const [transform, setTranform] = useState<string>("");
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
  const mainRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // 최초 로드 시 정중앙에 위치하도록
    const x = window.innerWidth / 2 - caracterSize;
    const y = window.innerHeight / 2 - caracterSize;
    setTranform(`translate(${x}px, ${y}px)`);
    setPosition({ x, y });

    // 최초 로드 시 포커스 되도록록
    mainRef.current && mainRef.current.focus();
  }, []);


  /** 
   * keydown이벤트로 캐릭터 위치를 이동시킵니다.
   */
  const handleMoveCharacter = (event: KeyboardEvent<HTMLDivElement>) => {
    const transform = moveCharacter(event, position);
    transform && setTranform(transform);

  };

  return (
    <Suspense fallback={<Loading />}>
      <Header location={"top"} />
      <div
        ref={mainRef}
        tabIndex={0}
        className="moveContainer"
        onKeyDown={handleMoveCharacter}
      >
        <div
          className="character"

          style={{
            width: caracterSize,
            height: caracterSize,
            transform
          }}>
          <p>☆</p>
        </div>
      </div>
      <Header location={"bottom"} />
    </Suspense>
  );
}
