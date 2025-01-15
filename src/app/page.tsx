import Header from "@/components/layout/header";
import Loading from "@/components/loading";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Header/>
      <>
        <p>ggg</p>
        <Image src={"./window.svg"} alt="ggg" width={100} height={100} />
      </>
    </Suspense>
  );
}
