var request = require('supertest');
require = require('really-need');

describe('loading the server', function() {
  var server;

  beforeEach(function() {
    server = require('./server', { bustCache: true  });
  });

  afterEach(function(done) {
    server.close(done);
  });

  it('responds to /', function(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('404 for other paths', function(done) {
    request(server)
      .get('/random/path')
      .expect(404, done);
  });
});
