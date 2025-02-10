import { Suspense } from "preact/compat";
import Loading from "./components/loading";
import Arrow from "./components/arrow";

export function App() {

  return (
    <Suspense fallback={<Loading />}>
      <Arrow />
      <Arrow />
    </Suspense>
  );
}
