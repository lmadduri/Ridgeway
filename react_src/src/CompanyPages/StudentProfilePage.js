import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {CompanyLayout} from './CompanyLayout';

class StudentProfilePage extends Component {

  render () {

    return (
      <CompanyLayout>
        <h2>Student # Profile</h2>
      </CompanyLayout>
    );
  }

}

StudentProfilePage.propTypes = {};

export { StudentProfilePage };