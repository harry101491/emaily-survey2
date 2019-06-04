const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

// middlware
chai.use(chaiHttp);

describe('App', () => {

    it('should return the sucess for intial get request', () => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
            });
    });
});