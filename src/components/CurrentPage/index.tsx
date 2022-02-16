import { FC } from "react";
import { Row, Col } from "react-bootstrap";

import VehicleCard from "../VehicleCard";
import { IVehicle } from "../../types";

interface ICurPageProps {
  currentItems: IVehicle[] | null;
}

// Render current page vehicles
const CurrentPage: FC<ICurPageProps> = ({ currentItems }) => {
  return (
    <Row>
      {currentItems &&
        currentItems.map((vehicle: IVehicle) => (
          <Col key={vehicle.MakeId} xs={6} md={4} lg={3}>
            <VehicleCard data={vehicle} />
          </Col>
        ))}
    </Row>
  );
};

export default CurrentPage;
