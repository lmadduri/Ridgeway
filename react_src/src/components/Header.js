import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render () {
    return (
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/iama'>Get Started</NavLink>
        </li>
      </ul>
    );
  }
}

export { Header };