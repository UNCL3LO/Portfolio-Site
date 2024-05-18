import React from 'react'
import { Tilt } from '/node_modules/react-tilt/dist/index.js';
import {motion} from 'framer-motion'

import {styles} from '../styles';
import {services} from '../constants';
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
  }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
<img src={icon} alt={title} className='w-16 h-16 object-contain'/>
 <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
  </div>

</motion.div>
    </Tilt>
    </>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
        </p>
      <h2 className={styles.sectionHeadText}>
        Overview</h2></motion.div>
        <motion.p
          variants={fadeIn("","", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Welcome to my portfolio! I'm a dedicated and results-oriented software engineer<br/>
             with a focus on delivering high-quality solutions that drive business success.<br/> 
             With expertise in web development, application design, and data analysis, I thrive on 
             tackling complex challenges and turning ideas into reality. Whether it's building scalable
              web applications, optimizing performance, or implementing innovative features, I am committed to
               creating impactful solutions that meet and exceed client expectations. Explore my portfolio to 
               see examples of my work and how I can help bring your software projects to life.

          </motion.p>
<div className='mt-20 flex flex-wrap gap-10'>
  {services.map((service, index) => (<ServiceCard key={service.title} 
  index={index} {...service}/>)) }
  </div>          
          </>
  )
}

export default About