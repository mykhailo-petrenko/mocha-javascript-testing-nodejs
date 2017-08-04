const assert = require('assert');
const AuthController = require('../../controllers/AuthController');
const expect = require('chai').expect;
const chai = require('chai');
const chaiAsPrimised = require('chai-as-promised');
chai.use(chaiAsPrimised);
chai.should();

describe("AuthController", function() {
    const authController = new AuthController();

    beforeEach(function() {
        authController.setRoles(['admin', 'user']);
    });

    describe("isAuthorised", function() {

        it("Should return false if not authorized", function() {
            var isAuthorised = authController.isAuthorised('guest');

            assert.equal(false, isAuthorised);
            expect(isAuthorised).to.be.false;
            isAuthorised.should.be.false;
        });

        it("Should return true if authorised", function() {
            assert.equal(true, authController.isAuthorised('user'));
            assert.equal(true, authController.isAuthorised('admin'));
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

    describe.only("isAuthorisedPromice", function() {

        it("Should return false if not authorized", function() {
            return authController.isAuthorisedPromise('guest').should.eventually.be.false;
        });

        it("Should return true if authorised", function() {
            return authController.isAuthorisedPromise('user').should.eventually.be.true;
        });
    });
}); 