"use client"; // Ensure this component is rendered on the client side

import React, { useState, useEffect } from 'react';
import Content from '@/components/Content';
import LowerHeader from '@/components/LowerHeader';
import Sidebar from '@/components/Sidebar';
import ThemeSelector from '@/components/ThemeSelector';
import { UpperHeader } from '@/components/UpperHeader';

const Theme = () => {
    const [theme, setTheme] = useState({ color: "white" });

    useEffect(() => {
       
    }, [theme]);

    return (
        <div className="flex flex-col md:flex-row justify-between">  
           
           <div className="hidden md:block">
        <Sidebar />
    </div>
            
         
            <div className="w-full md:w-3/4 px-4">
              
                <UpperHeader />

               
                <LowerHeader />

             
                <div className='flex flex-col md:flex-row justify-between mt-4'>
                    
                    <ThemeSelector setTheme={setTheme} />

                    
                    <Content theme={theme} className="sm:w-full sm:w-70" />

                </div>
            </div>
        </div>
    );
};

export default Theme;
