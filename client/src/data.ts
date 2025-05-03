// in this file i will be adding all of the fetch calls in the
// for the client to communicate the data to the server

import { SavedFilter } from './assets/Components/types';

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

// this code block is used to store the user's favorites into local storage
// and will be called in the RunList component
export const userFavorites: Vehicle[] = readFavorites();

export function writeFavorites(favorites: Vehicle[]): void {
  const json = JSON.stringify(favorites);
  localStorage.setItem('userFav-storage', json);
}

export function readFavorites(): Vehicle[] {
  const data = localStorage.getItem('userFav-storage');
  return data ? JSON.parse(data) : [];
}

// this code is to save the user's savedSearch filters in local Storage to be
// called in the runlist component
export const userSavedSearches: SavedFilter[] = readSavedFavorites();

export function writeSavedFavorites(savedSearch: SavedFilter[]): void {
  const json = JSON.stringify(savedSearch);
  localStorage.setItem('userFavSearch-storage', json);
}

export function readSavedFavorites(): SavedFilter[] {
  const data = localStorage.getItem('userFavSearch-storage');
  return data ? JSON.parse(data) : [];
}
