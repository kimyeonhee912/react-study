import React from "react";
import "./Toast.css";

const Toast = ({ message }) => {
  return (
    <div className={`toast toast-${message.title}`}>
      <main className="toast__message">
        <header className="toast__message-title">{message.title}</header>
        <p className="toast__message-text">{message.text}</p>
      </main>
      <button className="toast__button">Dismiss</button>
    </div>
  );
};

export default Toast;
