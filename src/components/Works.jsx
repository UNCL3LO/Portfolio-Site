import React from 'react'



const Works = () => {
  return (
    <>
      <div className='items-center my-20'>
        {/* First row */}
        <div className='flex flex-row'>
         
            <div className='bg-black w-[250px] h-[250px] flex items-center justify-center text-white'>
              Works
            </div>
         
          <div className='border-2 border-black w-[300px] h-[300px] m-2 hover:border-white hover:translate-y-2'>
          <a 
            href="https://curate-east-dev.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
              <iframe 
        src="https://curate-east-dev.vercel.app" 
        title="Embedded Site" 
        className="w-full h-full rounded-sm pointer-events-none"
      ></iframe>
          </a>
          </div>
          <div className='border-2 border-black w-[300px] h-[300px] m-2 hover:border-white hover:translate-y-2 transition duration-300 ease-in-out'>
    <a 
      href="https://hms-cy54-uncl3los-projects.vercel.app" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full h-full block"
    >
      <iframe 
        src="https://hms-cy54-uncl3los-projects.vercel.app" 
        title="Embedded Site" 
        className="w-full h-full rounded-sm pointer-events-none"
      ></iframe>
    </a>
  </div>
        </div>

       

      </div>
    </>
  );
};

export default Works;
