const should = require('should');
const request = require('supertest');
const app = require('../../app');

describe('User Controller의 ', () => {
  describe('전체 User 조회 ', () => {
    it('성공시', (done) => {
      request(app)
        .get('/api/user')
        .end((err, res) => {
          if (err) throw err;

          const should = res.body.should;

          should.be.instanceof(Array);

          if (res.body.length > 0) {
            res.body[0].should.instanceOf(Object).and.have.property('name');
          }

          done();
        });
    });
  });
});