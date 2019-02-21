import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StudentLayout } from './CompanyLayout';

class StudentsPage extends Component {

  render () {

    return (
      <StudentLayout>
        <h2>List of Students</h2>
      </StudentLayout>
    );
  }

}

StudentsPage.propTypes = {};

export { StudentsPage };