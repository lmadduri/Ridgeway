import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Header, Footer } from './';

class Layout extends Component {
  render () {
    const {header} = this.props;
    return (
      <div>
        {header}
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

Layout.propTypes = {
  header: PropTypes.element.isRequired,
};

export { Layout };