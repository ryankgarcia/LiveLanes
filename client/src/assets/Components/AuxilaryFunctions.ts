export function randomDistance(): number {
  const distanceArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const randomIndex = Math.floor(Math.random() * distanceArr.length);
  const value = distanceArr[randomIndex];
  const result = Math.floor(value * Math.random() * 100);
  return Math.max(10, result);
}

// this function is imported in the bidCard & details component to properly format prices to USD
export function formatUSD(number: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(number);
}
