import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import NotFound from '../components/NotFound';

export default () => (
  <Layout>
    <Helmet>
      <title>404 - Not Found</title>
    </Helmet>
    <NotFound />
  </Layout>
);
