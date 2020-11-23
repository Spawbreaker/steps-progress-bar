import React from 'react';
import PropTypes from 'prop-types';

const StepIcon = ({ color, symbol }) => (
  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle cx="15" cy="15" r="12" fill={color} stroke={color} strokeWidth="4" />
    </g>
    <g>
      <text
        textAnchor="middle"
        fontFamily="Source Sans Pro, Arial, sans-serif"
        fontSize="24"
        y="23"
        x="15"
        strokeWidth="0"
        stroke="#fff"
        fill="#fff"
      >
        { symbol }
      </text>
    </g>
  </svg>
);

StepIcon.propTypes = {
  color: PropTypes.string,
  symbol: PropTypes.number,
};

export default StepIcon;
