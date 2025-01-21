import React from 'react'; 
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'; // Ensure this function exists
import { technologies } from '../constants';
import { styles } from '../styles';

const Tech = ({ index, title }) => {
  return (
    <div className="w-full px-4">
      {/* Section Title */}
      <h1 className={`${styles.sectionHeadText} text-center mb-8`}>Tech Stack</h1>

      {/* Technology Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((technology, index) => (
          <Tilt
            key={technology.name}
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
              <div className="bg-black rounded-[20px] py-4 px-4 flex flex-col items-center">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-16 h-16 object-contain mb-2"
                />
                <h3 className="text-white text-[16px] font-bold text-center">
                  {technology.name}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Tech;

