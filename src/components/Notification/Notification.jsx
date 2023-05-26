import React from 'react';
import PropTypes from 'prop-types';
import NotificationWrapper from './Notification.styled';


const Notification = ({ message }) => (
  <NotificationWrapper>{message}</NotificationWrapper>
);


Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;