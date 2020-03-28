import React from 'react';
import styled from 'styled-components';

import Headshot from '../assets/headshot.png';

const CircleImage = styled.div`
    width: 275px;
    height: 275px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    background: url("${Headshot}") no-repeat;
    background-size: cover;
    background-position: 50% 30%;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: 768px) {
      width: 225px;
      height: 225px;
    }

    @media (max-width: 425px) {
      width: 200px;
      height: 200px;
    }

    @media (max-width: 375px) {
      width: 175px;
      height: 175px;
    }
`;

const ProfilePic = () => (
  <div>
    <CircleImage />
  </div>
);

export default ProfilePic;
