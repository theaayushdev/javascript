

const users = [
 { name: "John", active: true, lastLogin: "2025-05-10" },
 { name: "Jane", active: false, lastLogin: "2025-05-12" },
 { name: "Mike", active: true, lastLogin: "2025-05-15" }
];

const result = users.filter(user => user.active).sort((a, b) => new Date(b.lastLogin) - new Date(a.lastLogin));

console.log(result);


