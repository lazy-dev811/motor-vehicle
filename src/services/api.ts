import { IMotor } from "../types";

// A mock function to mimic making an async request for data
export async function fetchVehicles(): Promise<IMotor> {
  const res = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
  );

  if (res.ok) {
    return res.json();
  } else {
    throw res;
  }
}
