import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from './styles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(name => (
      <Button
        key={uuidv4()}
        type="button"
        name={name}
        onClick={onLeaveFeedback}
      >
        {name}
      </Button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FeedbackOptions;
