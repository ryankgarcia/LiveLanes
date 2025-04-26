// import './SearchBar.css';
// import React, { useState } from 'react';
// import { BsSearch } from 'react-icons/bs';
// // import { Vehicle } from '../../data';

// type Props = {
//   value: string;
//   onCustomChange: (value: string) => void;
// };

// export function SearchBar({ value, onCustomChange }: Props) {
//   const [inputValue, setInputValue] = useState('');
//   const [entries, setEntries] = useState<Vehicle[]>([]);
//   // const items = entries.filter((item) =>
//   //   item.toLowerCase().includes(value.toLowerCase())
//   // );

//   return (
//     <div className="search-container">
//       {inputValue === '' && <BsSearch className="search-icon" />}
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         onCustomChange={items}
//         placeholder="Search"
//         className="search-bar"
//       />
//     </div>
//   );
// }
