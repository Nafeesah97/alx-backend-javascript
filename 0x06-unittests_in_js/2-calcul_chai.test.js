const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type ==  "SUM"', () => {
    it('checks sum function', () => {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });
    it('positive and negative numbers', () => {
      expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it('checks subtract function', () => {
      expect(calculateNumber('SUBTRACT', 3.5, 1.2)).to.equal(3);
    });
  });
  describe('type ==  "DIVIDE"', () => {
    it('checks divide function', () => {
      expect(calculateNumber('DIVIDE', 2.3, 1.8)).to.equal(1);
    });
    it('checks divide function', () => {
      expect(calculateNumber('DIVIDE', 2.3, 0.2)).to.equal('Error');
    });
  });
});
