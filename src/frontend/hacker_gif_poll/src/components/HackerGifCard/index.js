import React, { useCallback, useState } from 'react';

import { arrayOf, number, string, shape } from 'prop-types';

import {
  Badge,
  Button,
  Col,
  Card,
  CardImg,
  CardBody,
  Row,
  CardHeader,
} from 'reactstrap';

import HackerGifModal from '../HackerGifModal';

/**
 * Returns a valid GIF title, based on the itemUrl,
 * if the titleFromApi supplied by the Tenor API
 * is empty
 * @param {string} titleFromApi
 * @param {string} itemUrl
 * @returns {string}
 */
const buildGifTitle = (titleFromApi, itemUrl) => {
  // e.g. for an itemUrl=https://tenor.com/view/hacker-hackerman-kung-fury-gif-7953536
  const dashSepparatedTitle = itemUrl
    .slice(23) // hacker-hackerman-kung-fury-gif-7953536
    .replace(/-*[0-9]/g, '') // hacker-hackerman-kung-fury-gif
    .split('-') // ['hacker','hackerman', 'kung', 'fury', 'gif']
    .join(' '); // hacker hackerman kung fury gif

  return typeof titleFromApi === 'string' && titleFromApi !== ''
    ? titleFromApi
    : dashSepparatedTitle;
};

const renderCardBodyComponents = (
  cardImageFlag,
  togglePreviewGif,
  totalVotes,
  setShowModal,
  setTotalVotes
) => {
  const handleTotalVotesIncrement = () => {
    const updatedVotes = totalVotes + 1;
    setTotalVotes(updatedVotes);
  };

  const handleGifInfoModal = () => {
    setShowModal(true);
  };

  return (
    <Row className="align-items-center">
      <Col className="d-flex align-items-center justify-content-start">
        <Button color="primary" outline>
          Total Votes <Badge color="secondary">{totalVotes}</Badge>
        </Button>{' '}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleTotalVotesIncrement}
        >
          Vote
        </Button>
      </Col>
      <Col className="d-flex align-items-center justify-content-end">        
        <Button onClick={handleGifInfoModal}>About</Button>
        <Button onClick={togglePreviewGif}>
          {cardImageFlag ? 'Toggle Preview' : 'Toggle GIF'}
        </Button>
      </Col>
    </Row>
  );
};

const HackerGifCard = ({ createdIn, gif, itemurl, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [totalVotes, setTotalVotes] = useState(0);
  const [cardImageFlag, setCardImageFlag] = useState(false);

  const {
    dims: [width, height],
    preview,
    duration,
    url,
    size,
  } = gif;

  const gifTitle = buildGifTitle(title, itemurl);

  const togglePreviewGif = useCallback(() => {
    setCardImageFlag(!cardImageFlag);
  }, [cardImageFlag, setCardImageFlag]);

  return (
    <>
      <HackerGifModal
        title={gifTitle}
        gifAttributes={{
          createdIn,
          duration,
          height,
          itemurl,
          size,
          url,
          width,
        }}
        visible={showModal}
        setVisible={setShowModal}
      />
      <Card>
        <CardHeader tag="h3">{gifTitle}</CardHeader>
        <CardImg
          top
          src={cardImageFlag ? url : preview}
          alt={gifTitle}
          height={height}
          width={width}
        />
        <CardBody>
          {renderCardBodyComponents(
            cardImageFlag,
            togglePreviewGif,
            totalVotes,
            setShowModal,
            setTotalVotes
          )}
        </CardBody>
      </Card>
    </>
  );
};

HackerGifCard.propTypes = {
  createdIn: number.isRequired,
  gif: shape({
    dims: arrayOf(number),
    preview: string,
  }).isRequired,
  itemurl: string.isRequired,
  title: string.isRequired,
};

export default HackerGifCard;
