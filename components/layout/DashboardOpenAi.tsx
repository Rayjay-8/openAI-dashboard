import { GET }  from "@/app/api/openai/route"
import DashBoardCli from "./DashBoardCli"

const DashboardOpenAi = async () => {
  const openai = await GET().then(e => e.json())

  return (
      <>
      <h2>injetado</h2>
      <DashBoardCli openai={openai.data} billing={openai.limit}/>
      </>
  )
}

export default DashboardOpenAi