// Target Extraction: Use .find() to locate the object corresponding to the team lead (isLead: true). Save it to a variable named currentLead and log their name directly.
// System Log Execution: Use .forEach() to loop through the entire teamRegistry. For every user object, print a structured server notification line to the console formatted exactly as:
// // "PROVISIONING ACCESS: [User Name] registered as [Role]"


const teamRegistry = [
  { userId: "u_101", name: "Anil", role: "Frontend Dev", isLead: false },
  { userId: "u_102", name: "Swikar", role: "Software Engineer", isLead: true },
  { userId: "u_103", name: "Ayush", role: "QA Engineer", isLead: false },
  { userId: "u_104", name: "Sita", role: "DevOps Architect", isLead: false }
];
const finding = teamRegistry.find(item => item.isLead===true);
console.log(finding.name)


//foreach 
teamRegistry.forEach(item => {
  console.log(
    `PROVISIONING ACCESS: ${item.name} registered as ${item.role}`
  );
});