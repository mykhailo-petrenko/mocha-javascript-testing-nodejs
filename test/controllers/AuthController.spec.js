const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai');
const chaiAsPrimised = require('chai-as-promised');
const sinon = require('sinon');
chai.use(chaiAsPrimised);
chai.should();

const AuthController = require('../../controllers/AuthController');
const User = require('../../model/User');

describe("AuthController", function() {
    const authController = new AuthController();
    var user;

    beforeEach(function() {
        user = new User(['admin', 'user']);

        sinon.spy(user, 'isAuthorised');

        authController.setUser(user);
        // authController.setRoles(['admin', 'user']);
    });

    describe("isAuthorised", function() {

        it("Should return false if not authorized", function() {
            var isAuthorised = authController.isAuthorised('guest');

            assert.equal(false, isAuthorised);
            expect(isAuthorised).to.be.false;
            isAuthorised.should.be.false;

            user.isAuthorised.calledOnce.should.be.true;
        });

        it("Should return true if authorised", function() {
            assert.equal(true, authController.isAuthorised('user'));
            assert.equal(true, authController.isAuthorised('admin'));

            user.isAuthorised.calledTwice.should.be.true;
        });

        it("Should not allow to get if unauthorized");
        it("Should allow to get if authorized");
    });

    describe("isAuthorisedAsync", function() {

        it("Should return false if not authorized", function(done) {
            this.timeout(2300);
            this.skip();
            authController.isAuthorisedAsync('guest', function(isAuthorised) {
                assert.equal(false, isAuthorised);
                done();
            });
        });

        it("Should return true if authorised", function(done) {
            this.timeout(2200);

            authController.isAuthorisedAsync('user', function(isAuthorised) {
                assert.equal(true, isAuthorised);
                done();
            });
        });

    });

    describe("isAuthorisedPromice", function() {

        it("Should return false if not authorized", function() {
            return authController.isAuthorisedPromise('guest').should.eventually.be.false;
        });

        it("Should return true if authorised", function() {
            return authController.isAuthorisedPromise('user').should.eventually.be.true;
        });
    });

    describe('getIndex', function() {
        var user, res;

        beforeEach(function() {
            user = new User([]);
            res = {
                render: sinon.spy()
            };
        });
        
        it('should render index for admin', function() {
            var isAuthorised = sinon.stub(user, 'isAuthorised' ).returns(true);
            var req = {user: user};
            

            authController.getIndex(req, res);
            isAuthorised.calledOnce.should.be.true;
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('index');
        });

        it('should render error is not admin', function() {
            var isAuthorised = sinon.stub(user, 'isAuthorised' ).returns(false);
            var req = {user: user};

            authController.getIndex(req, res);
            isAuthorised.calledOnce.should.be.true;
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('error');
        });

        it('should render exception when error is catched', function() {
            var isAuthorised = sinon.stub(user, 'isAuthorised' ).throws();
            var req = {user: user};

            authController.getIndex(req, res);
            isAuthorised.calledOnce.should.be.true;
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('exception');
        });
    });
}); 