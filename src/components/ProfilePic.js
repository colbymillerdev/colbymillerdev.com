import React from 'react';
import styled from 'styled-components';

import ProfessionalPic from '../../assets/ProfessionalPic.jpg';

const CircleImage = styled.div`
    width: 330px;
    height: 330px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    background: url("${ProfessionalPic}") no-repeat;
    background-size: 330px 330px;
    margin-right: auto;
    margin-left: auto;
`;

const ProfilePic = () => (
  <div>
    <CircleImage />
  </div>
);

export default ProfilePic;
