// in this file i will be adding all of the fetch calls in the
// for the client to communicate the data to the server

// import { User } from './components/UserContext';

// modify this so it lines up with the vehicles
export type Vehicle = {
  vehicleId?: number;
  vin: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  bodyType: string;
  exteriorColor: string;
  interiorColor: string;
  transmission: string;
  engine: string;
  fuelType: string;
  mileage: number;
  sellerName: string;
  conditionReport: string;
  damages: string;
  startingPrice: number;
  reservePrice: number;
};

// need this one for the get in the server
export async function readVehicles(): Promise<Vehicle[]> {
  const url = '/api/vehicles';
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Response status ${response.status}`);

  const vehicles = await response.json();
  return vehicles;
}

// need this one for the get in the server. change the entryId to what you need to fit this project
export async function readVehicleId(
  vehicleId: number
): Promise<Vehicle | undefined> {
  const url = `/api/vehicles/${vehicleId}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Response status ${response.status}`);

  const car = await response.json();
  return car;
}
