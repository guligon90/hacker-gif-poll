import React from 'react';

import { number, string, shape } from 'prop-types';

import { Table } from 'reactstrap';

import Link from '../Link';

const getLocalDateTimeString = (createdIn) => {
  const dateTime = new Date(createdIn * 1000);

  const offsetMinutes =
    dateTime.getTimezoneOffset() > 0
      ? dateTime.getMinutes() - dateTime.getTimezoneOffset()
      : dateTime.getMinutes() + dateTime.getTimezoneOffset();

  dateTime.setMinutes(offsetMinutes);

  return dateTime.toLocaleString('en-US');
};

const HackerGifAttributes = ({ gifAttributes }) => {
  const { createdIn, duration, height, size, url, width } = gifAttributes;

  const dateTime = getLocalDateTimeString(createdIn);

  return (
    <Table hover responsive>
      <tbody>
        <tr>
          {dateTime && (
            <>
              <th scope="row">Created in</th>
              <td>{dateTime}</td>
            </>
          )}
        </tr>
        <tr>
          {width && height && (
            <>
              <th scope="row">Dimensions</th>
              <td>
                {width}px X {height}px
              </td>
            </>
          )}
        </tr>
        <tr>
          {duration && (
            <>
              <th scope="row">Duration</th>
              <td>{duration} seconds</td>
            </>
          )}
        </tr>
        <tr>
          {size && (
            <>
              <th scope="row">Size</th>
              <td>{size} bytes</td>
            </>
          )}
        </tr>
        <tr>
          {url && (
            <>
              <th scope="row">URL</th>
              <td>
                <Link to={url}>
                  <span>{url}</span>
                </Link>
              </td>
            </>
          )}
        </tr>
      </tbody>
    </Table>
  );
};

HackerGifAttributes.defaultProps = {
  gifAttributes: shape({
    createdIn: 0.0,
    duration: 0.0,
    height: 0,
    size: 0,
    url: '',
    width: 0,
  }),
};

HackerGifAttributes.propTypes = {
  gifAttributes: shape({
    createdIn: number,
    duration: number,
    height: number,
    size: number,
    url: string,
    width: number,
  }),
};

export default HackerGifAttributes;
