function verifyUserAccess(userRole, accountsPassed) {
  if (userRole === "Admin" && accountsPassed > 0) {
    return "ACCESS_GRANTED_SECURE_ZONE";
  } else {
    return "ACCESS_DENIED_INSUFFICIENT_PERMISSIONS";
  }
}


console.log(verifyUserAccess("Guest", 3)); 
