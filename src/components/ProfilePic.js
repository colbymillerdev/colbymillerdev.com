import React from 'react';
import styled from 'styled-components';

import Headshot from '../assets/headshot.png';

const CircleImage = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    background: url("${Headshot}") no-repeat;
    background-size: cover;
    background-position: 50% 30%;
    margin-right: auto;
    margin-left: auto;
`;

const ProfilePic = () => (
  <div>
    <CircleImage />
  </div>
);

export default ProfilePic;
