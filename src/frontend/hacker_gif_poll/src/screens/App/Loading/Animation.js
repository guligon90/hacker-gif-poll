import React from 'react';
import { number, string } from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Animation = ({ type, hexColor, height, width, timeout }) => {
  /*
    Loader component documentation: https://www.npmjs.com/package/react-loader-spinner
    Oval demo: https://mhnpd.github.io/react-loader-spinner/?path=/story/loader--oval
  */
  return (
    <>
      <Loader
        type={type}
        color={hexColor}
        height={height}
        width={width}
        timeout={timeout}
      />
    </>
  );
};

Animation.defaultProps = {
  type: 'Oval',
  hexColor: '#0064a8',
  height: 80, // Component's default: 80px
  width: 80, // Component's default: 80px
  timeout: 0, // Duration in milliseconds after which the spinner is disabled
};

Animation.propTypes = {
  type: string,
  hexColor: string,
  height: number,
  width: number,
  timeout: number,
};

export default Animation;
