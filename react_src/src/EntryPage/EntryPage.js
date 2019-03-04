import React, { Component } from 'react';

import { Layout, Header } from '../components';

class EntryPage extends Component {

  render () {

    return (
      <Layout header={Header}>
        <h2>I am a Student/Company</h2>
      </Layout>
    );
  }

}

EntryPage.propTypes = {};

export { EntryPage };