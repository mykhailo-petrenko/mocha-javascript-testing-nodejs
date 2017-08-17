const gitService = require('../../services/gitService');

var service = require('../../services/gitService')();

describe.only("gitService", function() {
    
    describe("getUser", function() {

        it("should return requested user", function(done) {
            this.timeout(10000);

            service
                .getUser('mykhailo-petrenko')
                .then((user) => {
                    user.login.should.be.equal('mykhailo-petrenko');
                    done();
                });
        });

        it("should return user with repos", function() {
            this.timeout(10000);

            return service.getUser('mykhailo-petrenko')
                .should.eventually.have.property('repos').and.not.be.empty;
        });

    });

});