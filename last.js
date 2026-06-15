

const projects = [
  {
    id: 1,
    name: "Project A",
    tasks: [
      { completed: true },
      { completed: false }
    ]
  },
  {
    id: 2,
    name: "Project B",
    tasks: [
      { completed: true },
      { completed: true }
    ]
  }
];

const result = projects.map(p => {
  const total = p.tasks.length;
  const completed = p.tasks.filter(t => t.completed).length;
  const completionRate = (completed / total) * 100;

  return {
    id: p.id,
    name: p.name,
    completionRate
  };
});

console.log(result);