export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  // Iterate through the reportWithIterator
  for (const employeeName of reportWithIterator) {
    // Concatenate each employee name with |
    result += `${employeeName} | `;
  }

  // Remove the last ' | ' from the result
  result = result.slice(0, -3);

  return result;
}
