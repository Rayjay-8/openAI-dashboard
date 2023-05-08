import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
 })

 const openai = new OpenAIApi(configuration)

 export async function GET(request: Request) {
   // const response = await openai.listModels()

   const response = await openai.createImage({
      prompt: "1girl looking at viewer, smiling, cute, full body",
      n: 1,
      size : "512x512"
   });

   console.log(response.data)
   const imageUrl = response.data.data[0].url

   return new Response(JSON.stringify(imageUrl))
 }