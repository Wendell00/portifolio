import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface CardProps {
    children: React.ReactNode;
  }

const CardTilt: React.FC<CardProps> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 100,
        glare: true,
        'max-glare': 0.5,
      });
    }
  }, []);

  return (
    <div className="w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between" ref={cardRef}>
        {children}
    </div>
  );
};

export default CardTilt;
