import React from 'react';

import { CardColumns } from 'reactstrap';

import HackerGifCard from '../../components/HackerGifCard';
import Main from '../App/Main';

const generateHackerGifCards = (hackerGifData) => {
  return hackerGifData.map((resultItem) => {
    const { created, itemurl, title, media } = resultItem;

    // MEDIUMGIF format is recommended by the Tenor
    // API for preview in desktop-like environments
    const gif = media
      ? media.filter((gifItem) => gifItem.gif_format === 'MEDIUMGIF')[0]
      : null;

    return (
      <HackerGifCard
        key={created}
        createdIn={created}
        gif={gif}
        itemurl={itemurl}
        title={title}
      />
    );
  });
};

const HackerGifPoll = (data) => {
  const hackerGifData =
    data && data.hacker_gifs ? data.hacker_gifs.results : [];

  return (
    <Main>
      <CardColumns bg="dark">
        {generateHackerGifCards(hackerGifData)}
      </CardColumns>
    </Main>
  );
};

export default HackerGifPoll;
