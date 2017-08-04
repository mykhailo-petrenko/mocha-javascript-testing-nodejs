class AuthController {
    setRoles(roles) {
        this.roles = roles;
    }

    isAuthorised(neededRole) {
        return this.roles.includes(neededRole);
    }

    isAuthorisedAsync(neededRole, callback) {
        return setTimeout(() => {
            callback(this.isAuthorised(neededRole));
        }, 100);
    }

    isAuthorisedPromise(neededRole) {
        return new Promise((resolve) => {
            return setTimeout(() => {
                resolve(this.isAuthorised(neededRole));
            }, 100);
        });
    }
}

module.exports = AuthController;