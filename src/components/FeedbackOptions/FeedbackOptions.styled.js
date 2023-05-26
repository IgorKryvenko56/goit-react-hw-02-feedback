import styled from 'styled-components';

export const FeedbackOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FeedbackButton = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  outline: none;
  background-color: rgb(10, 120, 10);
  box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.8);
  margin: 0 10px;
  padding: 10px 20px;
  /* background-color: #fff; */
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

export default {
  FeedbackOptionsWrapper,
  FeedbackButton,
};
