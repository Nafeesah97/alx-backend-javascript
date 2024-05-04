const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('Utils.calculateNumber to always return the same number 10', () => {
    const bigBrother = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyr = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    assert(bigBrother.calledWith('SUM', 100, 20), 'Utils.calculateNumber should be called with type = SUM, a = 100, and b = 20');
    ssert.strictEqual(bigBrother.callCount, 1);
    assert(spyr.calledWith('The total is: 10'), 'console.log should be called with correct message');
    assert.strictEqual(spyr.callCount, 1);
    bigBrother.restore();
    spyr.restore();
  });
});
