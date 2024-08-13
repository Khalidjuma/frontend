import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';

export const AddModal = ({ showModal, handleModalClose, formData, handleChange, handleSubmit, operation }) => {
  return (
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>{operation.charAt(0).toUpperCase() + operation.slice(1)} Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Student ID"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Staff ID"
              name="staffId"
              value={formData.staffId}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="date"
              placeholder="Appointment Date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="time"
              placeholder="Appointment Time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Reason for Appointment"
              name="appointmentReason"
              value={formData.appointmentReason}
              onChange={handleChange}
              rows={4}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              as="select"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="PENDING">Pending</option>
              <option value="CONFIRMED">Confirmed</option>
              <option value="CANCELED">Canceled</option>
            </Form.Control>
          </InputGroup>
          {operation !== 'create' && (
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Appointment ID"
                name="appointmentId"
                value={formData.appointmentId}
                onChange={handleChange}
                required
              />
            </InputGroup>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="appointmentForm">
          {operation.charAt(0).toUpperCase() + operation.slice(1)}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
//