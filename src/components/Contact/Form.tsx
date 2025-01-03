"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';

interface MousePosition {
    x: number;
    y: number;
  }

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const ContactPage = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
        setMousePosition({
          x: (e.clientX),
          y: (e.clientY),
        });
      };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backgroundAnimation = useAnimation();
  const titleAnimation = useAnimation();
  const buttonAnimation = useAnimation();

  useEffect(() => {
    // Background animation - pulsing effect
    backgroundAnimation.start({
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });

    // Title animation - floating up and down with a glow effect
    titleAnimation.start({
      y: [0, -5, 0],
      textShadow: [
        "0 0 0 rgba(111,203,113, 0)",
        "0 0 10px rgba(111,203,113, 0.5)",
        "0 0 0 rgba(111,203,113, 0)"
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });

    // Button animation - morphing shape
    buttonAnimation.start({
      borderRadius: ["50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, []);

  return (
    <div className={`relative w-full min-h-screen bg-black overflow-hidden ${spaceGrotesk.className}`}>
      {/* Animated Background */}
      <motion.div 
        animate={backgroundAnimation}
        className="absolute inset-0 bg-gradient-to-r from-[#73B0D0] to-[#47F8C3] mix-blend-screen"
      ></motion.div>

      {/* Dynamic Circles */}
      {[...Array(10)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute w-16 h-16 rounded-full bg-[#C44FE2]/30"
          animate={{
            x: [0, window.innerWidth - 100],
            scale: [0.5, 1.5, 0.5],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random(),
            ease: "linear"
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Title */}
        <motion.h1 
          animate={titleAnimation}
          className="text-5xl md:text-7xl font-bold text-[#FAFAFA] text-center mb-10"
        >
          Get in Touch
        </motion.h1>

        {/* Contact Form */}
        <motion.form 
          className="w-full max-w-lg bg-black/50 backdrop-blur-lg p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-[#9097A6] mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full h-12 px-3 bg-black/40 rounded-lg text-lg text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#6FCB71]/50" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#9097A6] mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full h-12 px-3 bg-black/40 rounded-lg text-lg text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#6FCB71]/50" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-[#9097A6] mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-black/40 rounded-lg text-lg text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#6FCB71]/50" placeholder="Your Message"></textarea>
          </div>
          
          {/* Interactive Button */}
          <motion.button 
            type="submit"
            animate={buttonAnimation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-12 bg-[#6FCB71] text-[#0B0C0F] font-bold text-lg overflow-hidden relative"
          >
            <span className="relative z-10">Send Message</span>
            <motion.div 
              className="absolute inset-0 bg-[#47F8C3]/50"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.button>
        </motion.form>

        {/* Central Image with Parallax */}
        <motion.div 
        className="mt-10 absolute bottom-4"
        style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
        }}
        >
          <Image
            src="/sidecat.png"
            alt="Contact Cat"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px] object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;