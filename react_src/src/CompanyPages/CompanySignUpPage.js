import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {CompanyLayout} from './CompanyLayout';

class CompanySignUpPage extends Component {

  render () {

    return (
      <CompanyLayout>
        <h2>Company Sign Up</h2>
      </CompanyLayout>
    );
  }

}

CompanySignUpPage.propTypes = {};

export { CompanySignUpPage };