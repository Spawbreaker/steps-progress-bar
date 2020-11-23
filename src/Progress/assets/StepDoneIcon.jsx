import React from 'react';
import PropTypes from 'prop-types';

const StepDoneIcon = ({ color }) => (
  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle id="svg_1" fill={color} strokeWidth="20" r="4.21884" cy="15" cx="15" stroke={color} />
      <polygon stroke="null" points="12.934432029724121,23.68037509918213 5.093221664428711,16.382500648498535 7.821917533874512,13.38916301727295 12.522068977355957,17.762513160705566 21.789241790771484,6.319624900817871 24.90677833557129,8.896965026855469 " fill="#fff" id="svg_3" />
    </g>
  </svg>
);

StepDoneIcon.propTypes = {
  color: PropTypes.string,
};

export default StepDoneIcon;
