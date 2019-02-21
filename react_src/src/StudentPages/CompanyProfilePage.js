import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {StudentLayout} from './StudentLayout';

class CompanyProfilePage extends Component {

  render () {

    return (
      <StudentLayout>
        <h2>Student # Profile</h2>
      </StudentLayout>
    );
  }

}

CompanyProfilePage.propTypes = {};

export { CompanyProfilePage };