import React, { useState, useEffect } from 'react';
import './Notifications.css';
import { Link } from 'react-router-dom';

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
    <div className="notifications container">
      <h2 className="mb-5 mt-2 fw-bold">Notifications 🔔</h2>
      <ul className="notifications-list mb-5">
        {notifications.map(notification => (
          <li key={notification.id} className={notification.read ? 'read' : 'unread'}>
            <Link to="#" onClick={() => markAsRead(notification.id)}>
              {notification.message}
            </Link>
            {!notification.read && (
              <button
                className="bg-danger text-light border-0 mb-4 "
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
