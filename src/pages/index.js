import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import ProfilePic from '../components/ProfilePic';
import ContactIcons from '../components/ContactIcons';
import PersonalInfo from '../components/PersonalInfo';

export default () => (
  <Layout>
    <Helmet>
      <title>Colby Miller - Software Engineer</title>
    </Helmet>
    <ProfilePic />
    <PersonalInfo />
    <ContactIcons />
  </Layout>
);
