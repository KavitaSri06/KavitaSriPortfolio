import { motion } from 'framer-motion';
import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineBehance, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
  return (
    <section id="home" className='bg-secondary py-40 px-6'>
      <div className='flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto'>
        
        {/* Left Text */}
        <div className='md:w-1/2 space-y-5 text-center md:text-left'>

          {/* Animated Title */}
          <motion.h1
            className='text-5xl md:text-6xl font-bold text-white font-hero-font leading-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi,<br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
               I’m Kavita 👋

            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className='text-2xl text-white'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Aspiring Web Developer | UI/UX Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            className='text-lg text-white'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
           I create responsive, user-focused websites with clean code and thoughtful design.  
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className='flex justify-center md:justify-start space-x-4 pt-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <a href="https://www.linkedin.com/in/g-kavita-sri-394031283/" className='hover:text-white' aria-label="LinkedIn"><AiOutlineLinkedin size={30} /></a>
            <a href="https://www.behance.net/kavitasrig" className='hover:text-white' aria-label="Behance"><AiOutlineBehance size={30} /></a>
            <a href="https://github.com/KavitaSri06" className='hover:text-white' aria-label="GitHub"><AiOutlineGithub size={30} /></a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className='md:w-1/3 mt-10 md:mt-0 flex justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img className='w-full max-w-xs md:max-w-sm object-contain' src={HeroImg} alt='Hero' />
        </motion.div>
      </div>
    </section>
  );
}
