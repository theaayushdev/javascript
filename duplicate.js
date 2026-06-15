const emails = [
  "john@test.com",
  "jane@test.com",
  "john@test.com",
  "mike@test.com"
];

// Step 1: Count occurrences using reduce
const counts = emails.reduce((acc, email) => 
    {
  acc[email] = (acc[email] || 0) + 1;
  return acc;
}, 
{
    
}
);

// Step 2: Find the email with the highest count using reduce again
const mostCommon = Object.keys(counts).reduce((a, b) =>
  counts[a] > counts[b] ? a : b
);

console.log(mostCommon); // "john@test.com"