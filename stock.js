const products = [
 { id: 1, name: "Laptop", price: 1000, stock: 5 },
 { id: 2, name: "Phone", price: 800, stock: 0 },
 { id: 3, name: "Tablet", price: 500, stock: 10 }
];


const result = products.reduce((acc, product) => {

  acc.totalProducts = acc.totalProducts + 1;

  if (product.stock > 0)
     {
    acc.inStockProducts = acc.inStockProducts + 1;
  }

  acc.totalInventoryValue = acc.totalInventoryValue + (product.price * product.stock);

  return acc;
}, 
{
     totalProducts: 0, inStockProducts: 0, totalInventoryValue: 0 
    });

console.log(result);