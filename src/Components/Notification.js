import PropTypes from 'prop-types';
import React from 'react';

const Notification = ({ message }) => <span>{message}</span>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
