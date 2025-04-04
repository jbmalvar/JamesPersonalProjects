import React, { useEffect, useRef, useState } from 'react';
import './AboutContainer.css';

interface AboutContainerProps {
  id: string;
  title: string;
  backgroundImage: string;
  styles?: React.CSSProperties; // Add optional style prop
  children?: React.ReactNode;
  titleStyle?: React.CSSProperties;
  imgStyle?: React.CSSProperties; // Add optional imgStyle prop
}

const AboutContainer: React.FC<AboutContainerProps> = ({ id, title, backgroundImage, styles, children, titleStyle, imgStyle}) => {
const containerRef = useRef<HTMLDivElement | null>(null);
const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Add the 'animate' class when visible
          } else {
            setIsVisible(false); // Remove the 'animate' class when not visible
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      id={id} 
      className={`AboutContainer ${isVisible ? 'animate' : ''}`} 
      ref={containerRef}
    >
      <div className="TitleContainer" style={styles}>
        <div className="ContainerWrapper"></div>
        <h1 className="AboutTitle" style={titleStyle}>{title}</h1>
        <img src={backgroundImage} alt="Background" className="BackgroundImage" style={imgStyle}/>
        {children}
      </div>
    </div>
  );
};

export default AboutContainer;