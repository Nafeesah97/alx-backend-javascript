const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type ==  "SUM"', () => {
    it('checks sum function', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });
    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
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
