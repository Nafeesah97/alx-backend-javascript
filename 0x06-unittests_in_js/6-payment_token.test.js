const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Asynchronous testing with done()', () => {
  it('test the result of getPaymentTokenFromAPI', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({data: 'Successful response from the API'});
        done();
    });
  });
});
