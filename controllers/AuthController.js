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
}

module.exports = AuthController;