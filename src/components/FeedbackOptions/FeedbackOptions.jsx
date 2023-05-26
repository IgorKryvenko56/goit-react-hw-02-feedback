import React from 'react';
import PropTypes from 'prop-types';
import {
   FeedbackOptionsWrapper,
   FeedbackButton,
} from './FeedbackOptions.styled';
 

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackOptionsWrapper>
    {options.map(option => (
      <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </FeedbackButton>
    ))}
  </FeedbackOptionsWrapper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

