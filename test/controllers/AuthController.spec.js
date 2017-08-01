const assert = require('assert');
const AuthController = require('../../controllers/AuthController');

describe("AuthController", function() {
    const authController = new AuthController();

    describe("isAuthorised", function() {

        it("Should return false if not authorized", function() {
            assert.equal(false, authController.isAuthorised(['admin'], 'user'));
        });

        it("Should return true if authorised", function() {
            assert.equal(true, authController.isAuthorised(['admin', 'user'], 'user'));
            assert.equal(true, authController.isAuthorised(['admin', 'user'], 'admin'));
        });

    });

});