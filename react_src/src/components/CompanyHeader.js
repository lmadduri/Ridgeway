import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class CompanyHeader extends Component {
  render () {
    return (
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/company/:id/dashboard'>Company Profile</NavLink>
        </li>
        <li>
          <NavLink to='/students'>Students</NavLink>
        </li>
      </ul>
    );
  }
}

export { CompanyHeader };