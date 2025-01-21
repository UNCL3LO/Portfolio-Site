import React from 'react'
import{ motion } from 'framer-motion';
import { styles } from '../styles';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import {ComputerCanvas } from './canvas';
import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard =({index, title, icon}) => {
  return (
    <>
    <Tilt className="xs:w-[250px] w-full" >
<motion.div
variants={fadeIn("right","spring", 0.5 *
index, 0.75)}
className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
 >
  <div
  options={{
    max: 45,
    scale: 1,
    speed: 450
  }} className='bg-black rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'>
<img src={icon} alt={title} className='w-16 h-16 object-contain'/>
 <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
  </div>

</motion.div>
    </Tilt>
    </>
  )
}

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#f5f8f8]'/>

</div>
<div className='hidden sm:block'>

  <p className={styles.sectionSubText}>
  Hi, I'm
  Collins
        </p>
        
      <h2 className={styles.sectionHeadText}>
      MUNENE</h2>
  <p className={'${styles.heroSubText} mt-2 text-white'}>
    I develop quality web apps with a wide range of technologies, <br/>
  feel free to checkout my site and see what i can do.</p>

        </div>
       
      </div>
    
     <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
<a href=''>
<div className='mt-20 flex flex-wrap gap-10'>
  {services.map((service, index) => (<ServiceCard key={service.title} 
  index={index} {...service}/>)) }
  </div>  
     </a>
     
      
    
     </div>
 
    </section>
  )
}

export default Hero