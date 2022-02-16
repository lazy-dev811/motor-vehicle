import { FC, useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { IModalProps, IVehicle } from "../../types";
import { useAppDispatch, checkbackVehicle } from "../../store";

interface ICheckbackProps extends IModalProps {
  data: IVehicle;
}

const CheckbackModal: FC<ICheckbackProps> = ({ data, show, onClose }) => {
  const dispatch = useAppDispatch();
  const [checkbackDate, setCheckbackDate] = useState<string>(
    new Date().toString()
  );
  const [name, setName] = useState<string>("");
  const [checkbackRule, setCheckbackRule] = useState<string>("");

  useEffect(() => {
    if (data.name) {
      setName(data.name);
    }
  }, [data]);

  const onCheckback = () => {
    if (name === "" || checkbackDate === "" || checkbackRule === "") {
      alert("Please input fields correctly!");

      return;
    }

    dispatch(
      checkbackVehicle({
        ...data,
        name: name,
        checkbackDate: checkbackDate,
        checkbackRule: checkbackRule,
      })
    );
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data.MakeName} Checkback</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Checkback Time</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date"
              value={checkbackDate}
              onChange={(e) => setCheckbackDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Checkback Rule</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please input the checkout rule"
              value={checkbackRule}
              onChange={(e) => setCheckbackRule(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onCheckback}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckbackModal;
