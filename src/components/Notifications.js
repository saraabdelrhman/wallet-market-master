import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Notifications.css';

const Notifications = () => {
  const fakeData = [
    { id: 1, message: "Someone commented on your review", read: false },
    { id: 2, message: "Your profile was viewed", read: false },
    { id: 3, message: "Someone commented on your review", read: false },
    { id: 4, message: "Someone liked your comment", read: false },
  ];

  const [notifications, setNotifications] = useState(fakeData);

  useEffect(() => {
    setTimeout(() => {
      fetch('/notifications/user/{userId}')  
        .then(response => response.json())
        .then(data => setNotifications(data))
        .catch(error => console.error('Error fetching notifications:', error));
    }, 2000);
  }, []);

  const markAsRead = (id) => {
    fetch(`/notifications/mark-as-read/${id}`, { method: 'POST' }) 
      .then(response => {
        if (response.ok) {
          setNotifications(prevNotifications => 
            prevNotifications.map(notification => 
              notification.id === id ? { ...notification, read: true } : notification
            )
          );
        }
      })
      .catch(error => console.error('Error marking notification as read:', error));
  };

  return (
    <div className="notifications container mt-5">
      <h2 className="mb-4 fw-bold text-center">Notifications 🔔</h2>
      <ul className="notifications-list list-group">
        {notifications.map(notification => (
          <li
            key={notification.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              notification.read ? 'read' : 'unread'
            }`}
          >
            <Link
              to="#"
              onClick={() => markAsRead(notification.id)}
              className={`notification-message ${notification.read ? 'text-muted' : 'text-dark'}`}
            >
              {notification.message}
            </Link>
            {!notification.read && (
              <button
                className="btn btn-sm btn-outline-secondary ms-3"
                onClick={() => markAsRead(notification.id)}
              >
                Mark as read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
