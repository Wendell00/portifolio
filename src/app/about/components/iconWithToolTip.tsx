// components/IconWithTooltip.tsx
import React, { useState, ReactElement, MouseEvent } from 'react';
import { IconType } from 'react-icons'; // Certifique-se de importar o tipo correto para o seu ícone

interface IconWithTooltipProps {
  icon: ReactElement<IconType>;
  tooltipText: string;
}

const IconWithTooltip: React.FC<IconWithTooltipProps> = ({ icon, tooltipText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {icon}
      {isHovered && (
        <div className="tooltip" style={tooltipStyle}>
          {tooltipText}
        </div>
      )}
    </div>
  );
};

const tooltipStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-50%',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#333',
  color: '#fff',
  padding: '5px',
  borderRadius: '3px',
  display: 'block', // Alterado para 'block' por padrão
  whiteSpace: 'nowrap',
};

export default IconWithTooltip;
