import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class StudentHeader extends Component {
  render () {
    return (
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/student/:id/dashboard'>My Profile</NavLink>
        </li>
        <li>
          <NavLink to='/companies'>Companies</NavLink>
        </li>
      </ul>
    );
  }
}

export { StudentHeader };