// Filtering Out-of-Stock: Use .filter() to generate a new array named availableItems that excludes any products where inStock is false.
// Transforming Structure (Price Inflation Check): Due to import duties, all product prices must be increased by 10%. 
// Use .map() on the filtered availableItems array to return a new array of objects where each object retains its properties, 
// but the price field reflects the 10% increase. (Crucial requirement: Do not mutate or overwrite the original orderPayload array items).

const orderPayload = [
  { id: 1, name: "Mechanical Keyboard", price: 6500, inStock: true },
  { id: 2, name: "USB-C Hub Multiport", price: 2200, inStock: false },
  { id: 3, name: "UltraWide Monitor 34", price: 45000, inStock: true },
  { id: 4, name: "Ergonomic Mouse Wireless", price: 3800, inStock: true },
  { id: 5, name: "HDMI Cable 2K", price: 800, inStock: false }
];

const stocks = orderPayload.filter(item => item.inStock === true);
{
    console.log(stocks)
}
const availableItems = orderPayload.map(item => item.price * 0.1 + item.price);
{
    console.log(availableItems)
}