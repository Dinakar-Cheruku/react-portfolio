import logo from "../assets/DCLogo.png"
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "motion/react"
import { BiBorderRadius } from "react-icons/bi";

// import { FaLinkedin } from "react-icons/fa";
const linkedInURL = "https://www.linkedin.com/in/dinakar-cheruku-514824238/";
const githubURL = "https://github.com/Dinakar-Cheruku";
const xURL = "https://x.com/CherukuDinakar";
const instagramURL = "https://www.instagram.com/_dinakar_cheruku_/?__pwa=1;"


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="" className="w-16 h-auto md:w-20 lg:w-24 max-w-xs rounded-xl"/>
        </div>
        <motion.div 
        className="m-8 flex items-center justify-center gap-4 text-2xl">
            <motion.span onClick={() => window.open(linkedInURL, "_blank")} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}><FaLinkedin/></motion.span>
            <motion.span onClick={() => window.open(githubURL, "_blank")} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}><FaGithub/></motion.span>
            <motion.span onClick={() => window.open(instagramURL, "_blank")} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}><FaInstagram/></motion.span>
            <motion.span onClick={() => window.open(xURL, "_blank")} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}><FaSquareXTwitter/></motion.span>
        </motion.div>
    </nav>
  )
};

export default Navbar;
