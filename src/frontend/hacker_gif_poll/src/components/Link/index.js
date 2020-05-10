import React from 'react';

import { object, string } from 'prop-types';

import { Link as InternalLink } from 'found';

const parseTo = (to) => {
  const parser = document.createElement('a');
  parser.href = to;
  return parser;
};

const isInternal = (to) => {
  // If it's a relative url such as '/path', 'path' and does
  // not contain a protocol we can assume it is internal.

  if (to.indexOf('://') === -1) return true;

  const toLocation = parseTo(to);

  return window.location.hostname === toLocation.hostname;
};

const Link = (props) => {
  const { to, children, ...rest } = props;

  if (isInternal(to)) {
    return (
      <InternalLink to={to} {...rest}>
        {children}
      </InternalLink>
    );
  }
  return (
    <a href={to} rel="noopener noreferrer" target="_blank" {...rest}>
      {children}
    </a>
  );
};

Link.defaultProps = {
  children: undefined,
};

Link.propTypes = {
  to: string.isRequired,
  children: object,
};

export default Link;
