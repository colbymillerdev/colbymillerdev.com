import React from 'react';

import Layout from '../components/Layout';
import ProfilePic from '../components/ProfilePic';
import ContactIcons from '../components/ContactIcons';
import PersonalInfo from '../components/PersonalInfo';

export default () => (
  <Layout>
    <ProfilePic />
    <PersonalInfo />
    <ContactIcons />
  </Layout>
);
