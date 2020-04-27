import React from 'react';

import render from '../defaultRenderer';
import query from './HackerGifPoll.query';

const Component = React.lazy(() => import('./HackerGifPoll.component'));

const route = {
  path: '/poll',
  Component,
  query,
  render,
};

export default route;
