
const customers = [
 {
   name: "John",
   orders: [
     { id: 1, total: 100 },
     { id: 2, total: 200 }
   ]
 },
 {
   name: "Jane",
   orders: [
     { id: 3, total: 300 }
   ]
 }
];



const result = customers.flatMap(customer =>
  customer.orders.map(order => ({
    customer: customer.name,
    orderId: order.id,
    total: order.total
  }))
);

console.log(result);