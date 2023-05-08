import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation';

const today = new Date()
const initDate = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
initDate.setDate(1)

const TOKENOPENAI = process.env.OPENAI_BEARER_TOKEN
const TOKENAI = process.env.OPENAI_API_KEY
const URLLOGIN = `https://api.openai.com/dashboard/onboarding/login`
const URL = `https://api.openai.com/dashboard/billing/usage?end_date=${tomorrow.toISOString().split('T')[0]}&start_date=${initDate.toISOString().split('T')[0]}`
const URLINFOLIMIT = 'https://api.openai.com/dashboard/billing/subscription'


export interface Billing {
  object: string;
  has_payment_method: boolean;
  canceled: boolean;
  canceled_at?: null;
  delinquent?: null;
  access_until: number;
  soft_limit: number;
  hard_limit: number;
  system_hard_limit: number;
  soft_limit_usd: number;
  hard_limit_usd: number;
  system_hard_limit_usd: number;
  plan: Plan;
  account_name?: null;
  po_number?: null;
  billing_email?: null;
  tax_ids?: null;
  billing_address: BillingAddress;
  business_address?: null;
}
export interface Plan {
  title: string;
  id: string;
}
export interface BillingAddress {
  city: string;
  line1: string;
  line2?: null;
  state: string;
  country: string;
  postal_code: string;
}


export interface dataDash {
  object: string;
  daily_costs: (DailyCostsEntity)[] ;
  total_usage: number;
}
export interface DailyCostsEntity {
  timestamp: number;
  line_items?: (LineItemsEntity)[] | null;
  mes: string;
}
export interface LineItemsEntity {
  name: string;
  cost: number;
}


export const GET = async (req: Request) => {
  
  // login info
  const userInfo = await fetch(URLLOGIN, { 
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${TOKENOPENAI}`,
    },
    referrerPolicy: "no-referrer",
  }).then(e => e.json())

  // get data dashboard
  const dataDash = await fetch(URL, { 
    method: "GET",
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${TOKENAI}`,
    },
    referrerPolicy: "no-referrer",
  }).then(e => e.json())

  const limit = await fetch(URLINFOLIMIT, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${TOKENAI}`,
    },
    referrerPolicy: "no-referrer",
   }).then(e => e.json())

  // log
  console.log(dataDash)
  
  
  return NextResponse.json({
    in: new Date(), 
    sucesso: true, 
    limit,
    user: userInfo,
    data: dataDash,
  })
}
