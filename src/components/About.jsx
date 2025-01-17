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
    <div className='hover:bg-black transform transition-all duration-300 ease-in-out'>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
        </p>
      <h2 className={styles.sectionHeadText}>
        Overview</h2></motion.div>
        <motion.p
          variants={fadeIn("","", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Welcome to my portfolio! I'm a software engineer focused on creating reliable and effective solutions that support business goals.

I specialize in web development, application design, and data analysis, and I enjoy solving challenging problems and building practical tools. From developing scalable web applications to improving performance and adding new features, my goal is to deliver work that meets client needs.

Feel free to explore my portfolio to see examples of what I’ve done and how I can assist with your software projects.

          </motion.p>
          </div>
          </>
  )
}

export default About