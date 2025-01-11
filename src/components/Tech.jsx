import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'; // Make sure you have this function
import { technologies } from '../constants';

const Tech = ({ index, title, icon }) => {
  return (
    <>
    <h1>Tech Stack</h1>
    <Tilt
      className="w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-row">
          {technologies.map((technologies, index) =>
          (
            <div className='m-2 w-full'>
           <img src={technologies.icon} alt={title} 
           className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{technologies.name}</h3>
          
          </div>))
    }
        </div>
      </motion.div>
    </Tilt>
    </>
  );
};

export default Tech;
