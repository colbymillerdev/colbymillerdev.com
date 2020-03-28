import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import bgImg from '../assets/bg.png';
import CustFont from '../assets/fonts/Montserrat/Montserrat-Thin.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: CustFont;
    src: url('${CustFont}')
  }
  html {
    display: table;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  body {
    background: url("${bgImg}") no-repeat fixed;;
    background-size: cover;
    display: table-cell;
    vertical-align: middle;
    font-family: CustFont;
  }
`;

const Wrapper = styled.div`
  color: #fff;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;

  & h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-size: 90px;
  }

  & p {
    margin-top: 0px;
    font-size: 16px;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
  </>
);

export default Layout;
