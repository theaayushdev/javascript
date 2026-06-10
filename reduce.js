const employees = [
 { name: "John", department: "IT" },
 { name: "Jane", department: "HR" },
 { name: "Mike", department: "IT" },
 { name: "Sarah", department: "Finance" },
 { name: "Alex", department: "HR" }
];

const grouped = employees.reduce((acc, emp) => {
  if (!acc[emp.department]) {
    acc[emp.department] = [];
  }
  acc[emp.department].push(emp.name);
  return acc;
}, {});

console.log(grouped);