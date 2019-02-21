import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {StudentLayout} from './StudentLayout';

class StudentSignUpPage extends Component {

  render () {

    return (
      <StudentLayout>
        <h2>Company Sign Up</h2>
      </StudentLayout>
    );
  }

}

StudentSignUpPage.propTypes = {};

export { StudentSignUpPage };