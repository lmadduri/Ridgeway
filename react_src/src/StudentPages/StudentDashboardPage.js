import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {StudentLayout} from './StudentLayout';

class StudentDashboardPage extends Component {

  render () {

    return (
      <StudentLayout>
        <h2>Company Dashboard</h2>
      </StudentLayout>
    );
  }

}

StudentDashboardPage.propTypes = {};

export { StudentDashboardPage };