import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {CompanyLayout} from './CompanyLayout';

class CompanyLogInPage extends Component {

  render () {

    return (
      <CompanyLayout>
        <h2>Company Log In</h2>
      </CompanyLayout>
    );
  }

}

CompanyLogInPage.propTypes = {};

export { CompanyLogInPage };