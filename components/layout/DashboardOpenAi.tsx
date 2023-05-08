import { GET }  from "@/app/api/openai/route"
import DashBoardCli from "./DashBoardCli"

const DashboardOpenAi = async () => {
  const openai = await GET().then(e => e.json())

  return (
      <>
      <DashBoardCli openai={openai.data} billing={openai.limit}/>
      </>
  )
}

export default DashboardOpenAi