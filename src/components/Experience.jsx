import React from 'react'
import {VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';

import { motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import {experiences} from '../constants';
import {textVariant} from '../utils/motion';

const ExperienceCard = ({experience})=> (
  <VerticalTimelineElement
  contentStyle={{background: '#3A3B3C', color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid #23631'}}
  date= {experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
    
    </div>
  }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px]'>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index)=> (
      <li key={'experience-point-${index}'}
      className='text-white-100 text-[14px] pl-1 tracking-wider'
      >{point}
      

      </li>
      ))}

    </ul>

  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <div className='hover:bg-black transform transition-all duration-300 ease-in-out'>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
          What I have done so far
        </p>
      <h2 className={styles.sectionHeadText}>
        Work Experience</h2></motion.div>
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index)=>(<ExperienceCard key={index} experience={experience}/>))}
          </VerticalTimeline>

          </div>
          </div>
          </>
  )
}

export default Experience