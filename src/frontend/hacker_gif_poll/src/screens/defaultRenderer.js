import React from 'react';
import Loading from './App/Loading';
import ErrorPage from './App/ErrorPage';

let previouslyRendered = null;

const renderError = ({ error }) => {
  // eslint-disable-next-line no-console
  console.error(error);

  const message =
    error.res && error.res.json && error.res.json.errors
      ? error.res.json.errors[0].message
      : null;

  return message !== null ? (
    <ErrorPage message={message} />
  ) : (
    <div>{JSON.stringify(error)}</div>
  );
};

const renderLoading = () => {
  return <Loading previous={previouslyRendered} />;
};

/**
 * A generic renderer to centralize loading/error states per page
 * @param Component undefined if not loaded
 * @param error     defined if server/network error
 * @param props     props from query, undefined if not loaded
 * @returns {*}     react component to be rendered
 */
const defaultRenderer = ({ Component, error, props }) => {
  if (error) {
    return renderError({ error });
  }
  if (!Component || !props) {
    return renderLoading();
  }

  const current = <Component {...props} />;
  previouslyRendered = current;
  return current;
};

export default defaultRenderer;
