import React from 'react';
import styled from 'styled-components';

import { FaMedium } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { GoFile } from 'react-icons/go';
import ResumePDF from '../../files/ColbyMillerResume.pdf';

const IconWrapper = styled.div`
  text-align: center;
  margin-top: 3em;

  & a {
    color: white;
    text-decoration: none;
    margin-left: 3%;
    margin-right: 3%;
  }
`;

const Icon = styled.a`
  &:hover {
    color: ${props => props.iconColor};
  }
`;

const ContactIcons = () => (
  <IconWrapper>
    <Icon iconColor="#0077b5" title="LinkedIn" href="https://www.linkedin.com/in/colbymillerdev" target="_blank">
      <FaLinkedinIn size={'3em'} />
    </Icon>
    <Icon iconColor="#333" title="GitHub" href="https://github.com/colbymillerdev" target="_blank">
      <FaGithub size={'3em'} style={{}} />
    </Icon>
    <Icon iconColor="#00ab6c" title="Medium" href="https://medium.com/@colbymiller" target="_blank">
      <FaMedium size={'3em'} />
    </Icon>
    <Icon iconColor="#9c3c38" title="Resume" href={ResumePDF} target="_blank">
      <GoFile size={'3em'} />
    </Icon>
    <Icon iconColor="#0072c6" title="hello@colbymillerdev.com" href="mailto:hello@colbymillerdev.com">
      <GoMail size={'3em'} />
    </Icon>
  </IconWrapper>
);

export default ContactIcons;
