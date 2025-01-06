"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import gsap from 'gsap';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (cardRef.current) {
          const tl = gsap.timeline({ repeat: -1, yoyo: true });
          tl.fromTo(cardRef.current, { rotation: 0 }, { rotation: 2, duration: 2, ease: "power2.out" })
            .to(cardRef.current, { y: "-=10", ease: "sine.inOut", duration: 1 }, 0)
            .to(cardRef.current, { y: "+=10", ease: "sine.inOut", duration: 1 }, 1);
      
          const border = gsap.timeline({ repeat: -1 });
          border.fromTo(cardRef.current, { 
            borderWidth: "6px", 
            borderColor: "rgba(97,189,255,0.5)" 
          }, {
            borderWidth: "12px",
            borderColor: "rgba(179,217,255,0.5)",
            duration: 5,
            ease: "linear"
          });
      
          // Hover effect
          const hoverTL = gsap.timeline({ paused: true });
          hoverTL.to(cardRef.current, { scale: 1.05, duration: 0.3 });
      
          // Set up mouse event listeners
          const cardElement = cardRef.current as HTMLElement; // Assert that cardRef.current is an HTMLElement
          const handleMouseEnter = () => hoverTL.play();
          const handleMouseLeave = () => hoverTL.reverse();
      
          cardElement.addEventListener('mouseenter', handleMouseEnter);
          cardElement.addEventListener('mouseleave', handleMouseLeave);
      
          // Clean up listeners on component unmount
          return () => {
            cardElement.removeEventListener('mouseenter', handleMouseEnter);
            cardElement.removeEventListener('mouseleave', handleMouseLeave);
          };
        }
      }, []);

  return (
    <motion.div 
      ref={cardRef}
      className={`relative w-[387.33px] h-[371px] p-[40px_24px] flex flex-col items-center gap-6 rounded-[24px] ${spaceGrotesk.className}`}
      style={{
        background: 'rgba(20,20,20,0.8)', // dark background with slight transparency
        border: '6px solid transparent',
        borderColor: 'rgba(97,189,255,0.5)',
        borderImage: `linear-gradient(45deg, #61BDFF, #B3D9FF, #61BDFF) 1`,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="w-[120px] h-[120px] rounded-[500px] overflow-hidden">
        <Image 
          src={imageUrl}
          alt={title}
          width={120}
          height={120}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center gap-2 w-[339.33px]">
        <h3 className="text-[#FAFAFA] text-[24px] leading-[30px] font-bold text-center capitalize">{title}</h3>
        <p className="text-[#9097A6] text-[18px] leading-[150%] text-center">{description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const cards = [
    { title: 'DYOR', description: 'Look into wallets, tokens and transactions for more detailed analysis', imageUrl: '/logo.png' },
    { title: 'RESEARCH ON THE LATEST', description: 'Ask questions, get real-time insights, and master the skills you need to thrive in the Solana ecosystem.', imageUrl: '/wen.png' },
    { title: 'ANALYTICS', description: 'Stay ahead of the market by getting detailed insights into top traders, volumes, tokens and strategies', imageUrl: '/dyor.png' },
  ];

  return (
    <div className="absolute w-[1210px] h-[371px] left-[calc(50%-1210px/2)] top-[1117px] flex flex-row items-start gap-[24px]">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default FeaturesSection;