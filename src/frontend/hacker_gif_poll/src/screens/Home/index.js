import React from 'react';

import render from '../defaultRenderer';

const Component = React.lazy(() => import('./Home'));

const route = {
  path: '/home',
  Component,
  render,
};

export default route;
