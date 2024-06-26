import React from 'react';
import { Button } from './ui/button';

function LowerHeader() {
  return (
    <div className='flex justify-between items-center border-2 mr-2 mt-4 bg-gray-100 rounded-lg p-4 space-x-4'>
      <h2 h2 className='font-bold'>Apply A skin to your Profile.</h2>
        <div style={{width:"200px",display:"flex",justifyContent:"space-between"}}>
        <Button variant="custom">+ Custom</Button> 
        <Button>Save</Button> 
        </div>
      
    </div>
  );
}

export default LowerHeader;
