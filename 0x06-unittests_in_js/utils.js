function calculateNumber(type, a, b) {
  roundedA = Math.round(a);
  roundedB = Math.round(b);
  if (type === 'SUM') {
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    if (roundedB === 0) {
      return 'Error';
    } else {
      return roundedA / roundedB;
    }
  } else {
    return 0;
  }
}

const Utils = {
  calculateNumber: calculateNumber
};

module.exports = Utils;
