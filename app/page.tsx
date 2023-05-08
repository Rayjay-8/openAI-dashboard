import DashboardOpenAi from "@/components/layout/DashboardOpenAi";
import { Suspense } from 'react';
import Loading from "./loading"

export default async function Home(props) {
  
  return (
    <>
      <div className="z-10 w-full space-y-4 p-8 pt-6 max-w-[1280px] mx-auto">
      <h2>Dar boas vindas ao usuario e caso nao tiver token mostra o tutorial</h2>
      <Suspense fallback={<Loading/>}>
          <DashboardOpenAi/>
        </Suspense>
      </div>
    </>
  );
}

