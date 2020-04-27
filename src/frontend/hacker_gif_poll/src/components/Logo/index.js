import React from 'react';

import { Container } from 'reactstrap';

import vote from '../../images/vote.png';

const Logo = () => (
  <Container className="vh-100 flex-column d-flex justify-content-center align-items-center">
    <h4 className="mb-4 text-center font-weight-light">
      Help to elect the most popular GIF for the hacker community!
    </h4>
    <p>
      <img className="pl-4" src={vote} alt="vote" height="400" />
    </p>
  </Container>
);

export default Logo;
