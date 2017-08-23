const https = require('https');
const sinon = require('sinon');
const PassThrough = require('stream').PassThrough;

const gitService = require('../../services/gitService')();

const gitUsersJSON = {
    login: 'mykhailo-petrenko'
};
const gitReposJSON = [{id: 12312}, {id: 234234}];

describe.only("gitService", function() {
    
    describe("getUser", function() {
        var userRespose, reposResponse;

        beforeEach(function() {
            this.request = sinon.stub(https, 'request');

            userRespose = new PassThrough();
            userRespose.write(JSON.stringify(gitUsersJSON));
            userRespose.end();

            reposResponse = new PassThrough();
            reposResponse.write(JSON.stringify(gitReposJSON));
            reposResponse.end();

            this.request
                .onFirstCall().callsArgWith(1, userRespose)
                .onFirstCall().returns(new PassThrough())
                .onSecondCall().callsArgWith(1, reposResponse)
                .onSecondCall().returns(new PassThrough());
        });

        afterEach(function() {
            this.request.restore();
        });

        it("should return requested user", function() {
            return gitService
                .getUser('mykhailo-petrenko')
                .then((user) => {
                    user.login.should.be.equal('mykhailo-petrenko');
                });
        });

        it("should return user with repos", function() {
            return gitService.getUser('mykhailo-petrenko')
                .should.eventually.have.property('repos').and.not.be.empty;
        });

    });

});