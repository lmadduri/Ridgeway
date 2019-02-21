import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StudentLayout } from './StudentLayout';

class CompaniesPage extends Component {

  render () {

    return (
      <StudentLayout>
        <h2>List of Students</h2>
      </StudentLayout>
    );
  }

}

CompaniesPage.propTypes = {};

export { CompaniesPage };