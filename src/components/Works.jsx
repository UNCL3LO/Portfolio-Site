import React from 'react'

const Works = () => {
  return (
    <>
    <div className='items-center m-5'>
    <div className='flex flex-row'>
    
     <a 
            href="https://hms-ruddy.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className='bg-black w-[250px] h-[250px]'>Works
    </div>
    </a>
    <a 
            href="https://curate-east-dev.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >

    <div className='bg-green-800 w-[250px] h-[250px]'>Works</div> 
    </a>
    </div>
    <div className='flex flex-row'>
    <div className='bg-orange-800 w-[250px] h-[250px]'>Works</div>
     <div className='bg-violet-800 w-[250px] h-[250px]'>Works</div>
     </div>
     
     </div>
     </>
     )
}

export default Works