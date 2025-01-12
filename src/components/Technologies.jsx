import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion } from "motion/react"
import { FaPython } from 'react-icons/fa6';
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";




const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: { 
         y: [10,-10],
         transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
         },
    },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y:-150}}
      transition={{duration: 1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>



      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x:-150}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">


        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>


        <motion.div 
        variants={iconVariants(3.3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className='text-7xl text-yellow-400'/>
        </motion.div>


        <motion.div 
        variants={iconVariants(4.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className='text-7xl text-orange-400'/>
        </motion.div>

        
        <motion.div 
        variants={iconVariants(3.7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-400'/>
        </motion.div>


        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className='text-7xl text-yellow-400'/>
        </motion.div>


        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPhp className='text-7xl text-blue-400'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(2.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandDjango className='text-7xl text-green-800'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className='text-7xl text-green-300'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(4.7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAws className='text-7xl text-white-400'/>
        </motion.div>


      </motion.div>
    </div>
  )
}

export default Technologies
