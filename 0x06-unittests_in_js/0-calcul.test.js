const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('checks the addition function', function() {
    assert.strictequal(calculateNumber(2.5, 3.5), 7);
  });
  it('checks wthout rounding up', function() {
    assert.strictequal(calculateNumber(2, 3), 5);
  });
  it('with second number being a float', function() {
    assert.strictequal(calculateNumber(2, 3.5), 6);
  });
  it('first number is a  float', function() {
    assert.strictequal(calculateNumber(2.5, 3), 6);
  });
});
