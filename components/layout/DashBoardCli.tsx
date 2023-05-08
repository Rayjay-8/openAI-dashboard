'use client'
import React from 'react'
import {Metric, Card, Title, DonutChart, BarChart, Subtitle,  DateRangePicker, DateRangePickerValue, Legend, Flex, Text, ProgressBar   } from "@tremor/react";

import { Billing, dataDash } from '@/app/api/openai/route';

// constantes
const colors = ["blue", "teal", "amber", "rose", "indigo", "emerald", "pink"]
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const categories = new Set()

const valueFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;
 const formatoCerto = (data) =>  Object.entries(data).map(([name, total]) => ({ name, total }));

const calcporcentage = (total:number, x=0) => total ? (x * 100) / total : 0

function calcularTotal(data) {
  const total = data.reduce((acc, obj) => {
    for (const key in obj) {
      if (!["mes", "timestamp", "line_items"].includes(key)) {
        acc[key] = (acc[key] || 0) + obj[key];
      }
    }
    return acc;
  }, {});

  return total ;
}

// To use this graph I must add up all the categories
 const  DonutChartw = ({categories, data, total, totalSemFormato, billing}) => {
  
  // graph total
  const sumTotal = formatoCerto(calcularTotal(data))

  // billing
  const hardLimit = billing.hard_limit_usd ?? 0
  // const softLimit = billing.soft_limit_usd ?? 0
  const hardUs = hardLimit.toLocaleString("en-US", {style:"currency", currency:"USD"});
  const porcentage = Number(calcporcentage(hardLimit, totalSemFormato).toLocaleString("en-US", {});)

  return(
    <Card className="max-w-lg">
      <Title>Cost</Title>
      <Metric>{total}</Metric>
      <DonutChart
        className="mt-6"
        data={sumTotal}
        category={'total'}
        index="name"
        valueFormatter={valueFormatter}
        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
      />
      <div>
      <Flex>
      <Text>{porcentage}% de hard limit</Text>
      <Text>{hardUs}</Text>
    </Flex>
      <ProgressBar percentageValue={porcentage}  className="mt-3" />
      </div>
    </Card>
  );
}
 
const BarChartz = ({data, categories, total}) => (
    <>
    <Card>
      <Title>Daily Usage (USD)</Title>
        <Metric>{total}</Metric>
      <BarChart
        className="mt-6"
        data={data}
        index="mes"
        categories={categories}
        colors={colors}
        valueFormatter={valueFormatter}
        yAxisWidth={58}
        stack
        showLegend={false}
      />
    <Legend
      className="mt-3"
      categories={categories}
      colors={colors}
    />
   </Card>
   </>
 );

const DashBoardCli = ({ openai, billing }: { openai: dataDash, billing: Billing }) => {
   const formatado = openai.daily_costs.map(e => {
      const data = new Date(e.timestamp * 1000)
      e.mes = monthNames[data.getMonth()]+" "+data.getDate()
      const final:any = {}
      e.line_items?.forEach((e:{name: string, cost: number}) => {
        final[e.name] = e.cost / 100
        categories.add(e.name)
      })
      // delete e.line_items
      // delete e.timestamp
      e = {...e, ...final}
      return e
   })

   const usoTotal = (openai.total_usage ?? 0) / 100
   const TotalFormadado = (usoTotal).toLocaleString("en-US", {style:"currency", currency:"USD"});

  return (
    <div className='w-full py-2 px-2 grid gap-3'>
      <BarChartz data={formatado} total={TotalFormadado} categories={Array.from(categories)}/>
      <DonutChartw data={formatado} totalSemFormato={usoTotal} total={TotalFormadado} categories={Array.from(categories)} billing={billing} />
    </div>
  )
}

export default DashBoardCli