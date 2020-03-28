import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 80px !important;

  @media (max-width: 768px) {
    font-size: 50px !important;
  }

  @media (max-width: 425px) {
    font-size: 40px !important;
  }

  @media (max-width: 375px) {
    font-size: 35px !important;
  }
`;

const SubTitle = styled.h2`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }

  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

const ProfilePic = () => (
  <>
    <Title>Page not found</Title>
    <SubTitle>
      Oops! We're having trouble locating that page{' '}
      <span role="img" aria-label="emoji">
        😢
      </span>
    </SubTitle>
  </>
);

export default ProfilePic;
