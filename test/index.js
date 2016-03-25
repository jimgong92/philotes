var expect = require('chai').expect;
var philotes = require('../lib');

describe('Philotes', function() {
  it('should have a test suite', function(done) {
    done();
  });

  // Run remainder of specs
  require('./APISpec')();
});