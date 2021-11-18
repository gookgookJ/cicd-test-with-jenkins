const request = require('supertest');
const app = require('../app.js');

describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('Hello World!', done);
  });
});