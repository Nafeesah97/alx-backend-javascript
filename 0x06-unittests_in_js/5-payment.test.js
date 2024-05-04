const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./6-payment');

describe('using hooks to check sendpaymenttoapi', () => {
  let pymentStub;
  beforeEach(() => {
    pymentstub = sinon.spy(console, 'log');
  });
  afterEach(() => {
    pymentstub.resetHistory();
  });
  it('checks the payment function', () => {
    sendPaymentRequestToApi(100, 20);
    expect(pymentstub.calledWith('The total is: 120')).to.be.true;
    expect(pymentstub.callCount).to.be.equal(1);
  });
  it('checks the payment function', () => {
    sendPaymentRequestToApi(10, 10);
    expect(pymentstub.calledWith('The total is: 20')).to.be.true;
    expect(pymentstub.callCount).to.be.equal(1);
  });
})
