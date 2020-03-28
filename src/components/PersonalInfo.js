import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 60px !important;
  }

  @media (max-width: 425px) {
    font-size: 50px !important;
  }

  @media (max-width: 375px) {
    font-size: 45px !important;
  }
`;

const Description = styled.p`
  @media (max-width: 768px) {
    font-size: 14px !important;
  }

  @media (max-width: 425px) {
    font-size: 12px !important;
  }

  @media (max-width: 375px) {
    font-size: 10px !important;
  }
`;

const PersonalInfo = () => (
  <>
    <Title>Colby Miller</Title>
    <Description>
      Software Engineer{' '}
      <span role="img" aria-label="emoji">
        💻
      </span>{' '}
      Full Stack Developer
      <span role="img" aria-label="emoji">
        🤘
      </span>
      Always Learning{' '}
      <span role="img" aria-label="emoji">
        🚀
      </span>
    </Description>
  </>
);

export default PersonalInfo;
