export default function createEmployeesObject(departmentName, employees) {
  const newArr = [];
  for (const x of employees) {
    const quote = "'";
    newArr.push(quote + x + quote);
  }
  return `{ ${departmentName}: [${newArr}] }`;
}
