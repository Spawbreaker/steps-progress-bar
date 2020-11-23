import React from 'react';
import PropTypes from 'prop-types';
import Pending from '../assets/StepIcon';
import Done from '../assets/StepDoneIcon';

export const STATES = { PENDING: 0, CURRENT: 1, DONE: 2 };

const Light = ({ status, symbol }) => {
  switch (status) {
    case STATES.PENDING:
      return <Pending color="#B4BAD1" symbol={symbol} />; // Gray
    case STATES.CURRENT:
      return <Pending color="#3C64F4" symbol={symbol} />; // Blue
    case STATES.DONE:
      return <Done color="#3C64F4" />; // Blue
    default: return null;
  }
};

Light.propTypes = {
  status: PropTypes.number,
  symbol: PropTypes.number,
};

export default Light;
