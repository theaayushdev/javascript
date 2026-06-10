const clusterHosts = [
  { hostId: "node_alpha", status: "healthy" },
  undefined, 
  { hostId: "node_beta", status: "error" },
  { hostId: "node_gamma", status: "healthy" }
];

// Problematic Code written by intern:
const healthyNodes = clusterHosts.filter(node => node?.status === "healthy");
console.log(healthyNodes); 
