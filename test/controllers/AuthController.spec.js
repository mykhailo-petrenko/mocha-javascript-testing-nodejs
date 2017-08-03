const assert = require('assert');
const AuthController = require('../../controllers/AuthController');

describe("AuthController", function() {
    const authController = new AuthController();

    beforeEach(function() {
        authController.setRoles(['admin', 'user']);
    });

    describe("isAuthorised", function() {

        it("Should return false if not authorized", function() {
            assert.equal(false, authController.isAuthorised('guest'));
        });

        it("Should return true if authorised", function() {
            assert.equal(true, authController.isAuthorised('user'));
            assert.equal(true, authController.isAuthorised('admin'));
        });

    });

    describe("isAuthorisedAsync", function() {

        it("Should return false if not authorized", function(done) {
            this.timeout(2300);

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

});