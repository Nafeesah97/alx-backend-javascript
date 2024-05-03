const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type ==  "SUM"', () => {
    it('checks sum function', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it('checks subtract function', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 1.2), 3);
    });
  });
  describe('type ==  "DIVIDE"', () => {
    it('checks divide function', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.3, 1.8), 1);
    });
    it('checks divide function', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.3, 0.2), 'Error');
    });
  });
});
