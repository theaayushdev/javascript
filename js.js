const apiResponse= null;
// {
// payload:
// {
//     status:200
// }
// }

const isValid = apiResponse && apiResponse.payload && apiResponse.payload.status === 200;
console.log(isValid)