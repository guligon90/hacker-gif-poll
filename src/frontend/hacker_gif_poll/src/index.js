import React from 'react';
import ReactDOM from 'react-dom';
import { Resolver } from 'found-relay';

import * as serviceWorker from './serviceWorker';
import './styles/custom.scss';

import { environment } from './graphql';
import Router from './screens/Router';

ReactDOM.render(
  <Router resolver={new Resolver(environment)} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
