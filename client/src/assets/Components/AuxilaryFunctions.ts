// the reason this function was created is to give each vehicle entry
// a randomized VIN number to make each entry unique

function generateVIN(): string {
  let vin: string = '';
  const vinLength: number = 17;
  const vinCharacters: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  for (let i = 0; i < vinLength; i++) {
    const randomIndex = Math.floor(Math.random() * vinCharacters.length);
    vin += vinCharacters[randomIndex];
  }
  return vin;
}

function vins200(vinGenerator: () => string): string[] {
  const vinList: string[] = [];
  for (let i = 0; i < 200; i++) {
    vinList.push(vinGenerator());
  }
  return vinList;
}

const vinArr = vins200(generateVIN);
console.log(vinArr);

// auxiliary function
export function randomDistance(): number {
  const distanceArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const randomIndex = Math.floor(Math.random() * distanceArr.length);
  const value = distanceArr[randomIndex];
  const result = Math.floor(value * Math.random() * 100);
  return Math.max(10, result);
}

// auction timing (Live) has a green bar in the header with the 'timer' sliding down
// in that it includes price of current bid and current highest bidder name(use alias for protection)
// its a bunch of cards in line together includes a button with the word 'bid'
// lane number (letter+num) car make + year, miles, and distance

// user can sort the data by price, make, model, search for the make and model they are looking for

// this function is imported in the bidCard & details component to properly format prices to USD
export function formatUSD(number: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(number);
}
