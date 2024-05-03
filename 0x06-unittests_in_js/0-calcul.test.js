const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('checks the addition function', function() {
    assert.equal(calculateNumber(2.5, 3.5), 7);
    assert.equal(calculateNumber(2.5, 3), 6);
  });
});
