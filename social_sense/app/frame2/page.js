import Card from '@/components/Frame2/Card'
import DoughnutChart from '@/components/Frame2/Doughnut'
import LineChart from '@/components/Frame2/LineChart'
import Navbar from '@/components/Frame2/Navbar'
import TransactionSection from '@/components/Frame2/Transaction'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
       <Navbar/> 
         <Card/>
          <div className=" bg-slate-100 flex p-4">
            <LineChart/>
              <DoughnutChart/>
          </div>
           <div className=" bg-slate-100">
           <TransactionSection/>
           </div>
            
    </div>
  )
}
