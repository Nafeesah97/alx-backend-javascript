export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees).flat();
  let currentEmployeeIndex = 0; // Define currentEmployeeIndex

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (currentEmployeeIndex >= departments.length) {
            return { done: true };
          }
          const employee = departments[currentEmployeeIndex];
          currentEmployeeIndex += 1; // Increment currentEmployeeIndex
          return {
            value: employee,
            done: false,
          };
        },
      };
    },
  };
}
