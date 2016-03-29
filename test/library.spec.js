import chai from 'chai';
import zuma from '../lib/zuma.js';

chai.expect();

const expect = chai.expect;

var lib;

describe('Given an instance of my zuma', function () {
  before(function () {
    lib = new zuma();
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('zuma');
    });
  });
});