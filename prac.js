const users = [
 { id: 1,
   name: "John",
   orders: [
     { total: 100 },
     { total: 200 }
   ]
 },
 {
   id: 2,
   name: "Jane",
   orders: [
     { total: 500 }
   ]
 },
 {
   id: 3,
   name: "Mike",
   orders: [
     { total: 100 },
     { total: 100 },
     { total: 100 }
   ]
 }
];

const usersWithTotal = users.map(user => {
  const totalSpent = user.orders.reduce((sum, order) => {
    return sum + order.total;
  }, 0);

  return {
    id: user.id,
    name: user.name,
    totalSpent: totalSpent
  };
});

const topUser = usersWithTotal.reduce((max, user) => {
  if (user.totalSpent > max.totalSpent) {
    return user;
  }
  return max;
});

console.log(topUser);