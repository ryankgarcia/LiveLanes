// import { useEffect, useState } from 'react';
// import './SearchBar.css';
// import { BsSearch } from 'react-icons/bs';
// import { readVehicles, Vehicle } from '../../data';

// // type Vehicle = {
// //   vehicleId?: number;
// //   year: number;
// //   make: string;
// //   model: string;
// //   exteriorColor: string;
// //   interiorColor: string;
// //   transmission: string;
// // };

// type SearchBarProps = {
//   value: string;
//   onCustomChange: (value: string) => void;
// };

// export function SearchBar() {
//   const [inputValue, setInputValue] = useState('');
//   const [entries, setEntries] = useState<Vehicle[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<unknown>();
//   // const items = entries.filter((item) =>
//   //   item.toLowerCase().includes(value.toLowerCase())
//   // );

//   useEffect(() => {
//     async function load() {
//       try {
//         const entries = await readVehicles();
//         setEntries(entries);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     load();
//   }, []);

//   if (isLoading) return <div>Loading cars...</div>;
//   if (error) {
//     return (
//       <div>
//         Error loading vehicles{' '}
//         {error instanceof Error ? error.message : 'Unknown Error'}
//       </div>
//     );
//   }

//   return (
//     <div className="search-container">
//       {inputValue === '' && <BsSearch className="search-icon" />}
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         // onCustomChange={items}
//         placeholder="Search"
//         className="search-bar"
//       />
//     </div>
//   );
// }
