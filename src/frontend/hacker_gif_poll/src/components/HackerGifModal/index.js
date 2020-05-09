import React, { useCallback } from 'react';

import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import { bool, func, string, shape, number } from 'prop-types';

import HackerGifAttributes from '../HackerGifAttributes';
import Link from '../Link';

const HackerGifModal = ({ title, gifAttributes, visible, setVisible }) => {
  const { itemurl } = gifAttributes;

  const modalTitle = `GIF Info :: ${title}`;

  const toggle = useCallback(() => setVisible(!visible), [visible, setVisible]);

  return (
    <div>
      <Modal fluid="true" isOpen={visible} toggle={toggle}>
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody className="d-flex flex-row justify-content-center align-items-center">
          <Container className="d-flex flex-row justify-content-center align-items-center">
            <HackerGifAttributes gifAttributes={gifAttributes} />
          </Container>
        </ModalBody>
        <ModalFooter>
          <Link to={itemurl}>
            <Button color="secondary">View in Tenor</Button>
          </Link>{' '}
          <Button color="primary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

HackerGifModal.propTypes = {
  gifAttributes: shape({
    createdIn: number,
    duration: number,
    height: number,
    itemurl: string,
    size: number,
    url: string,
    width: number,
  }).isRequired,
  title: string.isRequired,
  visible: bool.isRequired,
  setVisible: func.isRequired,
};

export default HackerGifModal;
