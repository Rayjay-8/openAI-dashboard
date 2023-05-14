import DashboardOpenAi from "@/components/layout/DashBoardCli";
import { Suspense } from 'react';
import Loading from "./loading"
import OpenAiAnalytics from "app/api/openai/WrapperAPI"
import KeySelectComponent from "@/components/layout/DashKeySelect"

export default async function Home({
    searchParams
  }: {
    searchParams: { t: string, start: string, end: string, dt: string };
  }) {

    const token = searchParams.t ?? null;
    const analytics = await OpenAiAnalytics(token, searchParams.start, searchParams.end)
  
  return (
    <>
      <div className="z-10 w-full space-y-4 p-8 pt-6 max-w-[1280px] mx-auto">
      <Suspense fallback={<Loading/>}>
          <KeySelectComponent 
            keySelect={analytics.keySelect}
            listKeys={analytics.listKeys()}
            startDate={analytics.costsStartdDateType}
            endDate={ analytics.costsEndDateType}
            dt={searchParams.dt}
            />
          {(analytics.costsItems && analytics.tokensAndRequests) && <DashboardOpenAi 
            costs={analytics.costsItems}
            tokensRequests={analytics.tokensAndRequests}
            limits={analytics.limites}
          />}
        </Suspense>
      </div>
    </>
  );
}

