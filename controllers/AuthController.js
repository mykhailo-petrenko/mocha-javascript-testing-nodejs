class AuthController {
    isAuthorised(roles, neededRole) {
        return roles.includes(neededRole);
    }

    isAuthorisedAsync(roles, neededRole, callback) {
        return setTimeout(() => {
            callback(this.isAuthorised(roles, neededRole));
        }, 2123);
    }
}

module.exports = AuthController;