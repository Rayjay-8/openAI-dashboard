import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation';

const TOKENOPENAI = process.env.OPENAI_BEARER_TOKEN
const TOKENAI = process.env.OPENAI_API_KEY

if (!process.env.OPENAI_API_KEY || !TOKENAI) {
   throw new Error('Missing env var from OpenAI')
}

// https://api.openai.com/dashboard/billing/usage?end_date=2023-06-01&start_date=2023-05-01

export const GET = async (req: Request) => {
   
   return NextResponse.json({sucesso: true, TOKENOPENAI, TOKENAI, in: new Date()})
 }
 