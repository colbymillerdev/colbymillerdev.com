import React from 'react';
import styled from 'styled-components';

import ProfessionalPic from '../../assets/ProfessionalPic.jpg';

const CircleImage = styled.div`
    width: 275px;
    height: 275px;
    border-radius: 150px;
    -webkit-border-radius: 150px;
    -moz-border-radius: 150px;
    background: url("${ProfessionalPic}") no-repeat;
    background-size: 275px 275px;
    margin-right: auto;
    margin-left: auto;
`;

const ProfilePic = () => (
  <div>
    <CircleImage />
  </div>
);

export default ProfilePic;
