import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@bigcommerce/big-design';
import Step from './partials/Step';

const ProgressBar = ({ steps, current }) => {
  const [tabs, setTabs] = useState();
  useEffect(() => {
    const newTabs = [];
    const stepsL = steps.length - 1;
    steps.forEach(({ name }, index) => {
      newTabs.push(
        <Step
          text={name}
          index={index}
          current={current}
          isLast={index === stepsL}
          key={`progress_bar_${name}`}
        />,
      );
    });
    setTabs(newTabs);
  }, [current, steps]);

  return (
    <Grid gridColumns="repeat(auto-fit, minmax(60px, 1fr))" gridGap={0} marginBottom="xLarge">
      {tabs}
    </Grid>
  );
};

ProgressBar.propTypes = {
  steps: PropTypes.array,
  current: PropTypes.number,
};

export default ProgressBar;
