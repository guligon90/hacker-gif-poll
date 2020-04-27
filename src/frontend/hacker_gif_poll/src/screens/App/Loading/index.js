import React, { useEffect, useState } from 'react';

import { node, number } from 'prop-types';

import { Container } from 'reactstrap';

import Animation from './Animation';

const renderLoading = () => (
  <>
    <Container
      fluid
      className="vh-100 d-flex flex-column no-gutters p-0 flex-fill overflow-auto justify-content-center align-items-center"
    >
      <p>Carregando...</p>
      <p>
        <Animation />
      </p>
    </Container>
  </>
);

/**
 * A "loading state" that waits for a while before
 * showing to avoid flashing the content.
 * Inspired by
 * https://disjoint.ca/til/2017/09/21/how-to-delay-the-display-of-loading-animations-in-react/
 */
const Loading = ({ previous, timeout }) => {
  const [component, setComponent] = useState(previous || renderLoading());

  useEffect(() => {
    const timer = setTimeout(() => setComponent(renderLoading()), timeout);
    return () => clearTimeout(timer);
  }, [previous, timeout]);

  return component;
};

Loading.defaultProps = {
  previous: undefined,
  timeout: 50,
};

Loading.propTypes = {
  previous: node,
  timeout: number,
};

export default Loading;
