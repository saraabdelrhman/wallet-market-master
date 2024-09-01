import React from 'react';
import { Link } from 'react-router-dom';

const NotificationItem = ({ notification, markAsRead }) => {
  return (
    <Link
      to={''}
      className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}
      onClick={(e) => {
        e.preventDefault();
        markAsRead(notification.id);
      }}
    >
      <p>{notification.text}</p>
    </Link>
  );
};

export default NotificationItem;
