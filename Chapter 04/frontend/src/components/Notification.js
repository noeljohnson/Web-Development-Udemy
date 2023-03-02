import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function Notification({appName="Image Gallery", type, message}) {
  return (
    <Toast bg={type}>
      <Toast.Header closeButton={false}>
        <strong className="me-auto">{appName}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

export default Notification;
