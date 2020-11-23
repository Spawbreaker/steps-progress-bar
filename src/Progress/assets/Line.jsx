import React from 'react';
import PropTypes from 'prop-types';

const Line = ({ isDone }) => (
  <div style={{ width: '100%' }}>
    <svg width="100%" height="30" xmlns="http://www.w3.org/2000/svg">
      <g>
        <line
          fill="none"
          stroke={isDone ? '#3C64F4' : '#B4BAD1'}
          strokeWidth="3"
          x1="0"
          y1="15"
          x2="100%"
          y2="15"
          strokeLinejoin="undefined"
          strokeLinecap="undefined"
        />
      </g>
    </svg>
  </div>
);

Line.propTypes = {
  isDone: PropTypes.bool,
};

export default Line;
