// "use client"
// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// interface GradientCircleProps {
//   color: string;
//   order: number;
// }

// const GradientCircle: React.FC<GradientCircleProps> = ({ color, order }) => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 0.5 }}
//     className={`w-[200px] md:w-[304px] h-[200px] md:h-[304px] rounded-full flex-none order-${order}`}
//     style={{ 
//       background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,0) 70%)`,
//       mixBlendMode: 'screen'
//     }}
//   />
// );

// const HeroSection: React.FC = () => {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden bg-black">
//       {/* Background Gradient Circles */}
//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[1924px] h-[304px] flex items-center gap-2 md:gap-5 z-0 overflow-x-auto scrollbar-hide">
//         <GradientCircle color="#73B0D0" order={0} />
//         <GradientCircle color="#C44FE2" order={1} />
//         <GradientCircle color="#47F8C3" order={2} />
//         <GradientCircle color="#599DB0" order={3} />
//         <GradientCircle color="#C44FE2" order={4} />
//         <GradientCircle color="#47F8C3" order={5} />
//       </div>

//       {/* Main Content Container - Increased top padding */}
//       <div className="relative z-10 px-4 md:px-8 pt-[180px] md:pt-[240px]">
//         {/* Top Row: Left SVG, Center Image, Right SVG */}
//         <div className="flex justify-between items-start mb-12 md:mb-16 overflow-hidden">
//           {/* Left SVG - Hidden on mobile */}
//           <motion.svg
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hidden md:block"
//             width="259"
//             height="123"
//             viewBox="0 0 259 123"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M217.133 51.6053C214.61 52.7314 210.552 54.2029 210.552 54.2029C210.552 54.2029 131 174 91 96C51 18 -20.7048 54.2029 -20.7048 54.2029C-28.916 54.2029 -33.0577 44.8227 -27.3719 39.3389L10.6105 2.71303C12.3756 1.0082 14.7229 0.0383183 17.1766 0L249.343 0C257.626 0 261.681 9.46674 255.923 14.9794C255.923 14.9794 236.158 43.1135 217.133 51.6053Z" 
//               fill="url(#paint0_linear_152_101)"
//             />
//             <defs>
//               <linearGradient 
//                 id="paint0_linear_152_101" 
//                 x1="-29.9839" 
//                 y1="807.443" 
//                 x2="265.982" 
//                 y2="804.73" 
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#599DB0"/>
//                 <stop offset="1" stopColor="#47F8C3"/>
//               </linearGradient>
//             </defs>
//           </motion.svg>

//           {/* Center Image */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mx-auto"
//           >
//             <Image
//               src="/wencat.png"
//               alt="Wen Cat"
//               width={100}
//               height={100}
//               className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-contain"
//               priority
//             />
//           </motion.div>

//           {/* Right SVG - Hidden on mobile */}
//           <motion.svg
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hidden md:block mr-16"
//             width="184"
//             height="84"
//             viewBox="0 0 184 84"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path 
//               d="M163.305 40.0965C162.4 41.4603 161.033 42.4527 159.456 42.8923L8.69875 83.2877C3.34579 84.722 -0.980103 79.3776 1.76862 74.8095L20.1142 44.2323C21.0066 42.856 22.3652 41.8476 23.941 41.392L175.291 0.837743C180.691 -0.609181 184.973 4.79747 182.178 9.37817L163.305 40.0965Z" 
//               fill="url(#paint0_linear_152_103)"
//             />
//             <defs>
//               <linearGradient 
//                 id="paint0_linear_152_103" 
//                 x1="8.75139" 
//                 y1="64.3678" 
//                 x2="178.776" 
//                 y2="18.8098" 
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#778CBF"/>
//                 <stop offset="1" stopColor="#5DCDC9"/>
//               </linearGradient>
//             </defs>
//           </motion.svg>
//         </div>

//         {/* Content and Right Image Row */}
//         <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
//           {/* Main Text Content */}
//           <div className="w-full lg:w-[1024px] flex flex-col gap-6 lg:gap-10 px-4 lg:ml-[300px]">
//             <div className="flex flex-col gap-4 lg:gap-6">
//               <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-3xl md:text-4xl lg:text-[52px] leading-normal lg:leading-[65px] font-medium text-[#FAFAFA] font-['Familjen_Grotesk'] capitalize text-center lg:text-left"
//               >
//                 Your AI companion exploring the solana blockchain to bring you insights and detailed analytics in real time
//               </motion.h1>
              
//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="w-full lg:w-[678px] text-base lg:text-lg leading-[160%] text-[#9097A6] font-['Familjen_Grotesk'] text-center lg:text-left"
//               >
//                 Toly is here to help with insights on transactions, tokens, wallets and all activities on the Solana Blockchain
//               </motion.p>
//             </div>

//             <motion.button
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="flex justify-center items-center w-[205px] h-16 bg-[#6FCB71] border border-[#6FCB71]/20 rounded-full mx-auto lg:mx-0"
//                 type="button"
//                 >
//                 <Link href="/auth/signup" className="text-lg font-medium text-[#0B0C0F] capitalize font-[&apos;Familjen_Grotesk&apos;]">
//                     let&apos;s get started
//                 </Link>
//                 </motion.button>
//           </div>

//           {/* Right Side Cat Image - Hidden on mobile */}
//           <div className="hidden lg:block relative w-[596px] h-[642px] lg:mr-[154px]">
//             <Image
//               src="/sidecat.png"
//               alt="Side Cat"
//               width={596}
//               height={596}
//               className="w-full h-auto object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* Bottom SVG - Reduced margin from button */}
//       <motion.svg
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//         className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[200px] md:w-[289px]"
//         viewBox="0 0 289 104"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path 
//           d="M237.621 102.164C235.451 103.248 232.963 103.516 230.612 102.917L7.09621 43.5852C-0.840181 41.4785 -2.45518 31.4195 4.45095 27.5641L50.581 1.82526C52.7256 0.655899 55.2375 0.355192 57.5975 0.985292L281.992 60.5501C289.999 62.6753 291.511 72.7819 284.539 76.6049L237.621 102.164Z" 
//           fill="url(#paint0_linear_152_102)"
//         />
//         <defs>
//           <linearGradient 
//             id="paint0_linear_152_102" 
//             x1="39.8764" 
//             y1="-116.073" 
//             x2="324.686" 
//             y2="-42.8003" 
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#C44FE2"/>
//             <stop offset="1" stopColor="#73B0D0"/>
//           </linearGradient>
//         </defs>
//       </motion.svg>

//       {/* Add CSS for scrollbar hiding */}
//       <style jsx global>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSection;

"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimationControls, motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

interface MousePosition {
  x: number;
  y: number;
}

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
}

interface GradientCircleProps {
  color: string;
  order: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

const GradientCircle: React.FC<GradientCircleProps> = ({ color, order }) => {
  const controls: AnimationControls = useAnimation();
  
  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: order * 0.5,
      },
    });
  }, [controls, order]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className={`w-[200px] md:w-[304px] h-[200px] md:h-[304px] rounded-full flex-none order-${order}`}
      style={{ 
        background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,0) 70%)`,
        mixBlendMode: 'screen',
        filter: 'blur(8px)',
      }}
    />
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  const parallaxY = useTransform(scrollY, [0, 500], [0, -150]);
  const parallaxRotate = useTransform(scrollY, [0, 500], [0, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative w-full min-h-screen overflow-hidden bg-black ${spaceGrotesk.className}`}>
      {/* Interactive Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,.9)_2px,transparent_2px),linear-gradient(90deg,rgba(20,20,20,.9)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {/* Animated Gradient Circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[1924px] h-[304px] flex items-center gap-2 md:gap-5 z-0 overflow-x-auto scrollbar-hide">
        {[
          { color: "#73B0D0", order: 0 },
          { color: "#C44FE2", order: 1 },
          { color: "#47F8C3", order: 2 },
          { color: "#599DB0", order: 3 },
          { color: "#C44FE2", order: 4 },
          { color: "#47F8C3", order: 5 },
        ].map((circle, index) => (
          <GradientCircle key={index} {...circle} />
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div 
        className="relative z-10 px-4 md:px-8 pt-[120px] md:pt-[130px]"
        style={{ y: parallaxY }}
      >
        {/* Top Row */}
        <div className="flex justify-between items-start mb-12 md:mb-16 overflow-hidden">
          <FloatingElement delay={0.2}>
            <motion.div
              className="hidden md:block"
              animate={{
                filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              {/* Your left SVG here with glow effect */}
              <motion.svg
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden md:block"
                width="259"
                height="123"
                viewBox="0 0 259 123"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(89,157,176,0.6))"
                }}
              >
                <path d="M217.133 51.6053C214.61 52.7314 210.552 54.2029 210.552 54.2029C210.552 54.2029 131 174 91 96C51 18 -20.7048 54.2029 -20.7048 54.2029C-28.916 54.2029 -33.0577 44.8227 -27.3719 39.3389L10.6105 2.71303C12.3756 1.0082 14.7229 0.0383183 17.1766 0L249.343 0C257.626 0 261.681 9.46674 255.923 14.9794C255.923 14.9794 236.158 43.1135 217.133 51.6053Z" 
                  fill="url(#paint0_linear_152_101)"
                />
                <defs>
                  <linearGradient 
                    id="paint0_linear_152_101" 
                    x1="-29.9839" 
                    y1="807.443" 
                    x2="265.982" 
                    y2="804.73" 
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#599DB0"/>
                    <stop offset="1" stopColor="#47F8C3"/>
                  </linearGradient>
                </defs>
              </motion.svg>
            </motion.div>
          </FloatingElement>

          {/* Center Image */}
          <FloatingElement>
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/wencat.png"
                alt="Wen Cat"
                width={100}
                height={100}
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-contain hover:cursor-pointer"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(111,203,113,0.5))",
                }}
                priority
              />
            </motion.div>
          </FloatingElement>

          {/* Right SVG */}
          <FloatingElement delay={0.4}>
              <motion.svg
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden md:block mr-16"
                width="184" 
                height="84" 
                viewBox="0 0 184 84" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(119,140,191,0.4))"
                }}
              >
                <path 
                  d="M163.305 40.0965C162.4 41.4603 161.033 42.4527 159.456 42.8923L8.69875 83.2877C3.34579 84.722 -0.980103 79.3776 1.76862 74.8095L20.1142 44.2323C21.0066 42.856 22.3652 41.8476 23.941 41.392L175.291 0.837743C180.691 -0.609181 184.973 4.79747 182.178 9.37817L163.305 40.0965Z" 
                  fill="url(#paint0_linear_152_103)"
                />
                <defs>
                  <linearGradient 
                    id="paint0_linear_152_103" 
                    x1="8.75139" 
                    y1="64.3678" 
                    x2="178.776" 
                    y2="18.8098" 
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#778CBF"/>
                    <stop offset="1" stopColor="#5DCDC9"/>
                  </linearGradient>
                </defs>
              </motion.svg>
            </FloatingElement>
        </div>

        {/* Content and Right Image Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <motion.div 
            className="w-full lg:w-[1024px] flex flex-col gap-6 lg:gap-10 px-4 lg:ml-[300px]"
            style={{
              x: mousePosition.x * -1,
              y: mousePosition.y * -1,
            }}
          >
            <div className="flex flex-col gap-4 lg:gap-6">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-[52px] leading-normal lg:leading-[65px] font-medium text-[#FAFAFA] capitalize text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <span className="relative">
                  <span className="relative z-10">Your AI companion exploring the solana blockchain</span>
                  <motion.span
                    className="absolute -inset-1 bg-gradient-to-r from-[#73B0D0] to-[#47F8C3] opacity-25 blur rounded-lg"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative z-10 w-full lg:w-[678px] text-base lg:text-lg leading-[160%] text-[#9097A6] text-center lg:text-left"
              >
                Toly is here to help with insights on transactions, tokens, wallets and all activities on the Solana Blockchain
              </motion.p>
            </div>

            {/* Interactive Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto lg:mx-0"
            >
              <Link href="/auth/signup">
                <motion.button
                  className="relative group flex justify-center items-center w-[205px] h-16 bg-[#6FCB71] border border-[#6FCB71]/20 rounded-full overflow-hidden"
                  whileHover="hover"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#6FCB71] to-[#47F8C3]"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="relative z-10 text-lg font-medium text-[#0B0C0F] capitalize">
                    let's get started
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Side Cat */}
          <motion.div
            className="hidden lg:block relative w-[596px] h-[642px] lg:mr-[154px]"
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
              rotate: parallaxRotate,
            }}
          >
            <FloatingElement delay={0.6}>
              <Image
                src="/sidecat.png"
                alt="Side Cat"
                width={596}
                height={596}
                className="w-full h-auto object-contain hover:cursor-pointer"
                style={{
                  filter: "drop-shadow(0 0 12px rgba(111,203,113,0.3))",
                }}
                priority
              />
            </FloatingElement>
          </motion.div>
        </div>
      </motion.div>
      {/* Add CSS for scrollbar hiding */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;