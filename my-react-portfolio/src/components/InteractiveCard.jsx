import React from 'react';
import Tilt from 'react-parallax-tilt';
import designImage from '../assets/images/Design.jpg'; // Using your existing image

const InteractiveCard = () => {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
      gyroscope={true}
    >
      <img src={designImage} alt="Creative Design" className="interactive-card-image" />
    </Tilt>
  );
};

export default InteractiveCard;