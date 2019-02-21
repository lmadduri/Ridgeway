import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {CompanyLayout} from './CompanyLayout';

class CompanyDashboardPage extends Component {

  render () {

    return (
      <CompanyLayout>
        <h2>Company Dashboard</h2>
      </CompanyLayout>
    );
  }

}

CompanyDashboardPage.propTypes = {};

export { CompanyDashboardPage };