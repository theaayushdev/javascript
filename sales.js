const sales = [
  { employee: "John", amount: 100 },
  { employee: "Jane", amount: 200 },
  { employee: "John", amount: 300 },
  { employee: "Mike", amount: 50 },
  { employee: "Jane", amount: 100 }
];

const grouped = sales.reduce((acc, s) => {
  acc[s.employee] = (acc[s.employee] || 0) + s.amount;
  return acc;
}, {});

const result = Object.entries(grouped)
  .map(([employee, total]) => ({ employee, total }))
  .sort((a, b) => b.total - a.total);

console.log(result);