import React from 'react'
import{ motion } from 'framer-motion';
import { styles } from '../styles';
import {ComputerCanvas } from './canvas';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={'${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#0d9488]'/>
<div className='w-1 sm:h-80 h-40 violet-gradient'/>
</div>
<div>
  <h1 className={'${styles.heroHeadText} text-white text-[32px]'}>Hi, I'm<span className='text-[#0d9488]'> Munene</span></h1>
  <p className={'${styles.heroSubText} mt-2 text-white'}>I develop quality web apps with a wide range of technologies, <br/>feel free to checkout my site and see what i can do.</p>

        </div>
       
      </div>
    
     <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
<a href=''>
  <div className='w-[1240px] h-[410px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
    <motion.dev
    animate={{
      y: [0,24,0]
    
    }}
 
    className='w-3 h-3 rounded-full bg-secondary mb-1'
    />
    <ComputerCanvas/>
     </div>
     </a>
     
      
    
     </div>
 
    </section>
  )
}

export default Hero