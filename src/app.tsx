import { Suspense } from "preact/compat";
import Loading from "./components/loading";
import "./styles/home.css";
import Arrow from "./components/arrow";

export function App() {

  return (
    <Suspense fallback={<Loading />}>
      <Arrow />
    </Suspense>
  );
}
