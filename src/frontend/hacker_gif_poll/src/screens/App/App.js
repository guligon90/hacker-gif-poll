import React, { Suspense } from 'react';
import { node } from 'prop-types';

import Loading from './Loading';

const App = ({ children }) => (
  <div className="wrapper">
    <Suspense fallback={<Loading />}>{children}</Suspense>
  </div>
);

App.defaultProps = {
  children: undefined,
};

App.propTypes = {
  children: node,
};

export default App;
