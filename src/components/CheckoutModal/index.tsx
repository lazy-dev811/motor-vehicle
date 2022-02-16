import { FC, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { IVehicle, IModalProps } from "../../types";
import { useAppDispatch, checkoutVehicle } from "../../store";

interface ICheckoutProps extends IModalProps {
  data: IVehicle;
}

const CheckoutModal: FC<ICheckoutProps> = ({ data, show, onClose }) => {
  const dispatch = useAppDispatch();
  const [checkoutDate, setCheckoutDate] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [checkoutType, setCheckoutType] = useState<string>("loan");

  const onCheckout = () => {
    if (name === "" || checkoutDate === "") {
      alert("Please input fields correctly!");

      return;
    }

    // Change redux data which is just checked out
    dispatch(
      checkoutVehicle({
        ...data,
        name: name,
        checkoutDate: checkoutDate,
        checkoutType: checkoutType,
      })
    );

    // Clean fields and close modal
    setName("");
    setCheckoutDate("");
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data.MakeName} Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Check
              inline
              label="Loan"
              name="checkout-type"
              type="radio"
              value="loan"
              checked={"loan" === checkoutType}
              onChange={(e) => setCheckoutType(e.currentTarget.value)}
            />
            <Form.Check
              inline
              label="Test Drive"
              name="checkout-type"
              type="radio"
              value="test-drive"
              checked={"test-drive" === checkoutType}
              onChange={(e) => setCheckoutType(e.currentTarget.value)}
            />
          </Form.Group>
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
            <Form.Label>Checkout Time</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date"
              value={checkoutDate}
              onChange={(e) => setCheckoutDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onCheckout}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckoutModal;
