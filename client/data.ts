// in this file i will be adding all of the fetch calls in the
// for the client to communicate the data to the server

// import { User } from './components/UserContext';

// modify this so it lines up with the vehicles
export type Entry = {
  entryId?: number;
  title: string;
  notes: string;
  photoUrl: string;
};

// need this one for the get in the server
export async function readVehicles(): Promise<Entry[]> {
  const url = '/api/vehicles';
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Response status ${response.status}`);

  const vehicles = await response.json();
  return vehicles;
}

// need this one for the get in the server. change the entryId to what you need to fit this project
export async function readVehicleId(
  vehicleId: number
): Promise<Entry | undefined> {
  const url = `/api/vehicles/${vehicleId}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Response status ${response.status}`);

  const car = await response.json();
  return car;
}
