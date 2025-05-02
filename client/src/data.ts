// in this file i will be adding all of the fetch calls in the
// for the client to communicate the data to the server

export type Vehicle = {
  vehicleId?: number;
  laneLetter: string; // assign it here in run list right after you read them
  laneIndex: number; // assign it here in run list right after you read them
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

// need this one for the get protocol in the server
export async function readVehicles(): Promise<Vehicle[]> {
  const url = '/api/vehicles';
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Response status ${response.status}`);

  const vehicles = await response.json();
  return vehicles;
}

// need this one for the get protocol in the server
export async function readVehicleId(
  vehicleId: number
): Promise<Vehicle | undefined> {
  const url = `/api/vehicles/${vehicleId}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Response status ${response.status}`);

  const car = await response.json();
  return car;
}

// integrate your local storage here for the user's favorites, and the user's saved searches

// this function saves the user's entry in localStorage, i'll get to it later.
// export async function writeVehicle(entry: Vehicle): void {
//   const entryJSON = JSON.stringify(entry)
// }

// export async function readVehicle
