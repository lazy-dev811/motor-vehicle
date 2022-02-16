import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import {
  useAppSelector,
  useAppDispatch,
  selectVehicles,
  selectIsVehiclesLoading,
  fetchVehiclesAction,
} from "./store";
import { Pagination, CurrentPage } from "./components";
import { IVehicle } from "./types";

const itemsPerPage = 8;

function App() {
  const dispatch = useAppDispatch();
  const vehicles = useAppSelector(selectVehicles);
  const isVehiclesLoading = useAppSelector(selectIsVehiclesLoading);

  useEffect(() => {
    // fetch vehicles when the App is loaded.
    dispatch(fetchVehiclesAction());
  }, [dispatch]);

  // We start with an empty list of Vehicles.
  const [currentVehicles, setCurrentVehicles] = useState<IVehicle[] | null>(
    null
  );
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (vehicles) {
      // Fetch Vehicles from another resources.
      const endOffset = itemOffset + itemsPerPage;
      setCurrentVehicles(vehicles.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(vehicles.length / itemsPerPage));
    }
  }, [itemOffset, vehicles]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    if (vehicles) {
      const newOffset = (event.selected * itemsPerPage) % vehicles.length;
      setItemOffset(newOffset);
    }
  };

  return (
    <div className="App">
      {isVehiclesLoading || !vehicles ? (
        <span>Loading...</span>
      ) : (
        <Container fluid="md">
          <Title>ABC Motor Dealership Management</Title>
          <div>
            <CurrentPage currentItems={currentVehicles} />
            <Pagination
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              pageCount={pageCount}
            />
          </div>
        </Container>
      )}
    </div>
  );
}

const Title = styled.h1`
  text-align: center;
  margin: 40px 0;
`;

export default App;
