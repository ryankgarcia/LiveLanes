// the reason this function was created is to give each vehicle entry
// a randomized VIN number to make each entry unique

// import { VscInsert } from 'react-icons/vsc';

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

// const vinGenerator = generateVIN();

function vins200(vinGenerator: () => string): string[] {
  const vinList: string[] = [];
  for (let i = 0; i < 200; i++) {
    vinList.push(vinGenerator());
  }
  return vinList;
}

const vinArr = vins200(generateVIN);
console.log(vinArr);

// in the preview tab on the top it will have a card with car summary

// type CarCardPreview = {
//   lane: string; // A41, B99, C12, D47, E3
//   yearMake: string; // 2014 Toyota, 2022 Jeep
//   price: number; // $11,000, $2,500
//   model: string; // RAV4 FWD 4dr XLE
//   mileage: number; // 104,834
// };
// not sure if it should be included but it will have two buttons. add to favorites or set autobid

// then it will get to the main car info which will have different info

// interface CarPreview {
//   VIN: string; // 17 digit number mix
//   mileage: number;
//   auctionDate: string;
//   startingBid: number;
//   transportEstimate: number;
// }

// inside the actual car preview there will be an array of photos the user can look at
// possibly integrate the google maps api for transport estimate, which will give a rough estimate
// can be done by just making a random function for that part and generating a result with reasonable means

// what the damage details interface should aim to accomplish is to highlight the issues with the
// vehicle the buyer might be made aware of so there are little to no surprises when they
// go about the buying process
// interface DamageDetails {
//   images: image[];
// }

// interface VehicleDetails {
//   year: number; // 2008, 2012, 2014, 2017
//   make: string; // TOYOTA, JEEP, FORD, ETC
//   model: string; //
//   mileage: number;
//   doors: number;
//   exteriorColor: string;
//   interiorColor: string; // BLACK, GREY
//   engine: string; // 1.8L, 2.4L, 2.5L
//   fuelType: string; // GASOLINE, DIESEL
//   transmission: string; // AUTOMATIC, MANUAL
//   bodyType: string; // SUV, SEDAN, COUPE, TRUCK
// }

// include a seller's notes section that checks for

// auction timing (Live) has a green bar in the header with the 'timer' sliding down
// in that it includes price of current bid and current highest bidder name(use alias for protection)
// its a bunch of cards in line together includes a button with the word 'bid'
// lane number (letter+num) car make + year, miles, and distance

// user can sort the data by price, make, model, search for the make and model they are looking for
