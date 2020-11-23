import React, { useState, useEffect } from 'react';
import { Text, Grid, GridItem } from '@bigcommerce/big-design';
import PropTypes from 'prop-types';
import Light, { STATES } from './Light';
import Line from '../assets/Line';

const centerTemplate = `
"dashl bubble dashr"
"text text text"
/ 1fr 40px 1fr
`;

const Step = ({
  text, index, current, isLast,
}) => {
  const [status, setStatus] = useState();

  useEffect(() => {
    if (current < index) {
      setStatus(STATES.PENDING);
    } else if (current === index) {
      setStatus(STATES.CURRENT);
    } else {
      setStatus(STATES.DONE);
    }
  }, [index, current]);
  return (
    <GridItem>
      <Grid gridTemplate={centerTemplate} gridGap="2px" style={{ justifyItems: 'center' }}>
        <GridItem gridArea="bubble">
          <Light status={status} symbol={index + 1} />
        </GridItem>
        <GridItem gridArea="text">
          <Text color={status === STATES.CURRENT ? 'black' : 'secondary50'}>{text}</Text>
        </GridItem>
        <GridItem gridArea="dashl" hidden={index === 0}>
          <Line isDone={status !== STATES.PENDING} />
        </GridItem>
        <GridItem gridArea="dashr" hidden={isLast}>
          <Line isDone={status === STATES.DONE} />
        </GridItem>
      </Grid>
    </GridItem>
  );
};

Step.propTypes = {
  text: PropTypes.string,
  index: PropTypes.number,
  current: PropTypes.number,
  isLast: PropTypes.bool,
};

export default Step;
