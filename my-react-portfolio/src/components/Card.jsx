// src/components/Card.jsx
import React from 'react';
import styled from 'styled-components';

// Define your styled components
const CardWrapper = styled.a`
  background: var(--color-glass-bg);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  text-align: left;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-glass-border);
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CardIcon = styled.i`
  color: var(--color-accent);
  margin-bottom: 15px;
  font-size: 1.5rem; /* Make icon a bit bigger */
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
`;

// The Card component
const Card = ({ href, icon, title, description, aosDelay }) => {
  return (
    <CardWrapper href={href} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay={aosDelay}>
      {icon && <CardIcon className={icon}></CardIcon>}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
};

export default Card;