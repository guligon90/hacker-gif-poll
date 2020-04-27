import React from 'react';

import useRouter from 'found/useRouter';
import { Button, Container } from 'reactstrap';
import { string } from 'prop-types';

const ErrorPage = ({ message }) => {
  const { router } = useRouter();

  return (
    <Container
      fluid
      className="d-flex flex-column no-gutters p-0 flex-fill overflow-auto justify-content-center align-items-center"
    >
      <p>
        <h3 className="mb-0 font-weight-light">{message}</h3>
      </p>
      <Button color="primary" onClick={() => router.push('/')}>
        Voltar
      </Button>
    </Container>
  );
};

ErrorPage.defaultProps = {
  message: 'Oops... Um erro desconhecido ocorreu :(',
};

ErrorPage.propTypes = {
  message: string,
};

export default ErrorPage;
