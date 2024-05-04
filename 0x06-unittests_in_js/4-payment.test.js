const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('Utils.calculateNumber to always return the same number 10', () => {
    const bigBrother = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyr = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.calledWith('SUM', 100, 20)).to.be.true;
    expect(bigBrother.callCount).to.be.equal(1);
    expect(spyr.calledWith('The total is: 10')).to.be.true;
    expect(spyr.callCount)).to.be.equal(1);
    bigBrother.restore();
    spyr.restore();
  });
});
