import React from 'react';

import { Container } from 'reactstrap';

import { object } from 'prop-types';

import Main from '../App/Main';

const HackerGifPoll = ({ data }) => {
  // TODO: Implement GIF polling here
  return (
    <Main>
      <Container
        fluid
        className="d-flex flex-column no-gutters p-0 flex-fill overflow-auto"
      >
        {data}
      </Container>
    </Main>
  );
};

HackerGifPoll.defaultProps = {
  data: undefined,
};

HackerGifPoll.propTypes = {
  data: object,
};

export default HackerGifPoll;
