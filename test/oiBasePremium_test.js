import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

let should = chai.should();
chai.use(chaiHttp);

describe('/POST getRating for OCP', () => {
  it('should return basic OCP Response', (done) => {
    chai.request(app)
        .post('/api/calcRating/ocp')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('string');
          res.body.should.equal('OCP Response');
          done();
        });
  });
});

describe('/GET getRating for OCP', () => {
  it('should return basic OI Response', (done) => {
    chai.request(app)
        .get('/api/calcRating/ocp')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('string');
          res.body.should.equal('OCP Info Return');
          done();
        });
  });
});

describe('/POST getRating for OI', () => {
  it('should return basic OI Response', (done) => {
    chai.request(app)
        .post('/api/calcRating/oi')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('string');
          res.body.should.equal('OI Response');
          done();
        });
  });
});

describe('/GET getRating for OI', () => {
  it('should return basic OI Response', (done) => {
    chai.request(app)
        .get('/api/calcRating/oi')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('string');
          res.body.should.equal('OI Info Return');
          done();
        });
  });
});

