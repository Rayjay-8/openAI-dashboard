"use client";
import { useState, useTransition } from "react";
import { usePathname, useRouter } from 'next/navigation';

import { SelectBox, SelectBoxItem, Text, DateRangePicker, DateRangePickerValue, Title, Flex } from "@tremor/react";
import { KeyIcon } from "@heroicons/react/outline";
import { format } from "date-fns/esm";

interface DashboardView {
   listKeys: string[]
   keySelect: string
   startDate: Date
   endDate: Date
   dt: string | null
}


const DashBoardCli = (props:DashboardView) => {
   

   const { replace } = useRouter();
   const pathname = usePathname();
   const [isPending, startTransition] = useTransition();

   const [value, setValue] = useState<DateRangePickerValue>([
    props.startDate,
    props.endDate,
    props.dt
  ]);


   function setToken(token: string){
      const params = new URLSearchParams(window.location.search);
      if (token) {
         params.set('t', token);
       } else {
         params.delete('t');
       }

       startTransition(() => {
         replace(`${pathname}?${params.toString()}`);
       });
   }

   function setPeriodo(periodo){
    console.log(periodo)
    const params = new URLSearchParams(window.location.search);
    
    if(periodo[0]){
      params.set('start', format(periodo[0], 'yyyy-MM-dd'));
    }else{
      params.delete('start');
    }
    if(periodo[1]){
      params.set('end', format(periodo[1], 'yyyy-MM-dd'));
    }else{
      params.delete('end');
    }

    if(periodo[2]){
      params.set('dt', periodo[2]);
    }else{
      params.delete('dt');
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });

    // setValue(periodo)
   }

   console.log(value)

   return(
      <>
      <Flex className="px-4">
  
          <Title>OpenAI Analytics</Title>
          <div className="w-full max-w-3xl items-end flex md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 flex-col">
            <SelectBox
                onValueChange={(value) => setToken(value)}
                defaultValue={props.keySelect}
            >
                {props.listKeys?.map(key => {
                  return <SelectBoxItem key={key} value={key} text={key} icon={KeyIcon} />
                })}
            </SelectBox>
  
            <DateRangePicker value={value} className="max-w-sm mx-auto" onValueChange={setPeriodo}/>
        </div>
      </Flex>
      {isPending && (
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      </>
   )
}

export default DashBoardCli