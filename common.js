const developers = [
  { name: "John", skills: ["React", "Node"] },
  { name: "Jane", skills: ["React", "Java"] },
  { name: "Mike", skills: ["Node", "Python"] },
  { name: "Sarah", skills: ["React"] }
];

const counts = {};
developers.forEach(d => d.skills.forEach(s => counts[s] = (counts[s] || 0) + 1));
const mostCommon = Object.keys(counts).reduce((a, b) => counts[a] >= counts[b] ? a : b);
console.log(mostCommon) 
