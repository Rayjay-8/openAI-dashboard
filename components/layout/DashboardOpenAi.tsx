import { GET }  from "@/app/api/openai/route"
// import DashBoardCli from "./DashBoardCli"
import DashBoardCli from "./DashKeySelect"
import { OpenAiWrapper } from 'app/api/openai/WrapperAPI';


const DashboardOpenAi = async ({listKeys}:{analytics: typeof OpenAiWrapper}) => {
  // const openai = await GET().then(e => e.json())
  // instanciar nao podem passar para client
    console.log(analytics)

  return (
      <>
      <DashBoardCli/>
      {/* <DashBoardCli openai={openai.data} billing={openai.limit} tokensRequests={openai.tokensRequests}/> */}
      </>
  )
}

export default DashboardOpenAi