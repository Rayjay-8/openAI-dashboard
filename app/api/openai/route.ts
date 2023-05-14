import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation';



export const GET = async (req: Request) => {  
  return NextResponse.json({
    in: new Date(), 
    sucesso: true
  })
}
