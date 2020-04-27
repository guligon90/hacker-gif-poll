import React from 'react';

import render from '../defaultRenderer';

const Component = React.lazy(() => import('./About'));

const route = {
  path: '/about',
  Component,
  render,
};

export default route;
