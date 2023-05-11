import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation';

const today = new Date()
const initDate = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
initDate.setDate(1)

const TOKENAI = process.env.OPENAI_API_KEY
const URL = `https://api.openai.com/dashboard/billing/usage?end_date=${tomorrow.toISOString().split('T')[0]}&start_date=${initDate.toISOString().split('T')[0]}`
const URLINFOLIMIT = 'https://api.openai.com/dashboard/billing/subscription'
const URLREQUESTSANDTOKENS = 'https://api.openai.com/v1/usage?date='

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

export interface LineItemsEntity {
  name: string;
  cost: number;
}
export interface DailyCostsEntity {
  timestamp: number;
  line_items?: (LineItemsEntity)[] | null;
  mes: string;
}
export interface dataDash {
  object: string;
  daily_costs: (DailyCostsEntity)[] ;
  total_usage: number;
}


// tokens / requests

export interface DataEntity {
  aggregation_timestamp: number;
  n_requests: number;
  operation: string;
  snapshot_id: string;
  n_context: number;
  n_context_tokens_total: number;
  n_generated: number;
  n_generated_tokens_total: number;
}
export interface Value {
  object: string;
  data?: (DataEntity)[] | null;
  ft_data?: (null)[] | null;
  dalle_api_data?: (null)[] | null;
  whisper_api_data?: (null)[] | null;
  current_usage_usd: number;
}
export interface tokensRequests {
  status: string;
  value: Value;
}


export const GET = async (req: Request) => {

    // requests and tokesn
    const tokensDay = Array.from({length: new Date().getDate() + 1}, (_, i) => i + 1)
    let requestTokens = []
    
    for(const day of tokensDay){
      const currentDay = new Date()
      currentDay.setDate(day)
      requestTokens.push(fetch(URLREQUESTSANDTOKENS+currentDay.toISOString().split('T')[0], {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${TOKENAI}`,
        },
        referrerPolicy: "no-referrer",
      }).then(e => e.json()))
    }

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
  
  return NextResponse.json({
    in: new Date(), 
    sucesso: true, 
    limit,
    data: dataDash,
    tokensRequests: await Promise.allSettled(requestTokens)
  })
}
