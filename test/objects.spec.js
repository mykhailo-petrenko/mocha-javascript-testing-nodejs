const should = require('chai').should();

describe.only("Objects demo", function() {

    var user = {
        name: "John",
        gender: "male",
    };

    var anotherUser = {
        name: "John",
        gender: "male"
    };

    it("should be deal with objects", function() {
        user.should.have.property("gender");
    });

    it("should have name John", function() {
        user.should.have.property("name").and.equal("John");
    });

    it("Should compare objects", function() {
        user.should.be.deep.equal(anotherUser);
    });

    it("Should allow to test nulls", function() {
        var isAuth = null;

        should.not.exist(isAuth);
    });
});