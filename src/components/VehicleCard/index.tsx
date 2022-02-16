import { FC, useMemo, useState } from "react";
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";

import CheckoutModal from "../CheckoutModal";
import CheckbackModal from "../CheckbackModal";
import { IVehicle } from "../../types";

// Use mock image to show the vehicle image
const CAR_IMG_1 = "../imgs/car-1.jpeg";
const CAR_IMG_2 = "../imgs/car-2.jpeg";
const CAR_IMG_3 = "../imgs/car-3.jpeg";
const CAR_IMG_4 = "../imgs/car-4.jpeg";

interface IVehicleCardProps {
  data: IVehicle;
}

const VehicleCard: FC<IVehicleCardProps> = ({ data }) => {
  const { MakeId, MakeName } = data;
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showCheckbackModal, setShowCheckbackModal] = useState(false);

  const handleCheckoutModalClose = () => setShowCheckoutModal(false);
  const handleCheckoutModalShow = () => setShowCheckoutModal(true);

  const handleCheckbackModalClose = () => setShowCheckbackModal(false);
  const handleCheckbackModalShow = () => setShowCheckbackModal(true);

  const carImg = useMemo(() => {
    if (MakeId % 4 === 0) {
      return CAR_IMG_1;
    } else if (MakeId % 4 === 1) {
      return CAR_IMG_2;
    } else if (MakeId % 4 === 2) {
      return CAR_IMG_3;
    }

    return CAR_IMG_4;
  }, [MakeId]);

  return (
    <Wrapper>
      <Logo variant="top" src={carImg} />
      <Card.Body>
        <Card.Title>{MakeName}</Card.Title>
        {data.name && data.checkoutType ? (
          <Button variant="danger" onClick={handleCheckbackModalShow}>
            Check Back
          </Button>
        ) : (
          <Button variant="outline-primary" onClick={handleCheckoutModalShow}>
            Check Out
          </Button>
        )}
      </Card.Body>
      <CheckoutModal
        data={data}
        show={showCheckoutModal}
        onClose={handleCheckoutModalClose}
      />
      <CheckbackModal
        data={data}
        show={showCheckbackModal}
        onClose={handleCheckbackModalClose}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  margin-bottom: 1rem;
`;

const Logo = styled(Card.Img)`
  object-fit: cover;
  height: 150px;
`;

export default VehicleCard;
