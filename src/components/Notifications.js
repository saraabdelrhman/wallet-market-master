import React, { useState, useEffect } from 'react';
import './Notifications.css'
import { Link } from 'react-router-dom';
const Notifications = () => {
  // Fake data for initial load
  const fakeData = [
    { id: 1, message: "Someone commented on your review", read: false },
    { id: 2, message: "Your profile was viewed", read: false },
    { id: 3, message: "Someone commented on your review", read: false },
    { id: 4, message: "some one liked your comment", read: false },
    { id: 5, message: "Someone replied to your comment", read: false },
    { id: 6, message: "Your profile was viewed", read: false },
  ];

  const [notifications, setNotifications] = useState(fakeData);

  useEffect(() => {
    setTimeout(() => {
      fetch('/notifications/user/{userId}')  // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => setNotifications(data))
        .catch(error => console.error('Error fetching notifications:', error));
    }, 2000);
  }, []);

  // Function to mark a notification as read
  const markAsRead = (id) => {
    fetch(`/notifications/mark-as-read/${id}`, { method: 'POST' })  // Replace with your actual API endpoint
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
    <div className="notifications-container">
      <h2>Notifications</h2>
      <ul className="notifications-list link-underline-opacity-0">
        {notifications.map(notification => (
          <li key={notification.id} className={notification.read ? 'read' : 'unread'}>
            <Link to={''} onClick={() => markAsRead(notification.id)}>
              {notification.message}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
