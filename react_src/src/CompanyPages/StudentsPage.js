import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CompanyLayout } from './CompanyLayout';

class StudentsPage extends Component {

  render () {

    return (
      <CompanyLayout>
        <h2>List of Students</h2>
      </CompanyLayout>
    );
  }

}

StudentsPage.propTypes = {};

export { StudentsPage };