import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 90px;
`;

const PersonalInfo = () => (
  <>
    <Title>Colby Miller</Title>
    <p>
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
    </p>
  </>
);

export default PersonalInfo;
