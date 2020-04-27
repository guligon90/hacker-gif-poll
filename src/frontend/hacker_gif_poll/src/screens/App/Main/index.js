import React from 'react';
import { node } from 'prop-types';

import { Container } from 'reactstrap';

import classnames from 'classnames';

import Menu from './Menu';

import styles from './main.module.scss';

const Main = ({ children }) => (
  <>
    <Menu />
    <Container fluid className={classnames('no-gutters p-1', styles.app)}>
      {children}
    </Container>
  </>
);

Main.defaultProps = {
  children: undefined,
};

Main.propTypes = {
  children: node,
};

export default Main;
