import React, { Component } from 'react';

import { Layout, Header } from '../components';

class LandingPage extends Component {

  render () {

    return (
      <Layout header={Header}>
        <h2>Landing Page</h2>
      </Layout>
    );
  }

}

LandingPage.propTypes = {};

export { LandingPage };