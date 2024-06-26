import Content from '@/components/Content'
import LowerHeader from '@/components/LowerHeader'
import Sidebar from '@/components/Sidebar'
import ThemeSelector from '@/components/ThemeSelector'
import { UpperHeader } from '@/components/UpperHeader'


import React from 'react'

const Theme = () => {
  return (
    <div className="flex justify-between">  
       
        <Sidebar/>
         <div style={{width:"80%", marginRight:"20px"}}>
         <UpperHeader/>
          < LowerHeader/>
            <div  className='flex justify-between'>
               <ThemeSelector/>
            <Content/>
            </div>
            
         </div>
          
    </div>
  )
}

export default Theme