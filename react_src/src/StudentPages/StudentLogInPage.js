import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {StudentLayout} from './StudentLayout';

class StudentLogInPage extends Component {

  render () {

    return (
      <StudentLayout>
        <h2>Company Log In</h2>
      </StudentLayout>
    );
  }

}

StudentLogInPage.propTypes = {};

export { StudentLogInPage };