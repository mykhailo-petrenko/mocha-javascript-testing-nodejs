class AuthController {
    isAuthorised(roles, neededRole) {
        return roles.includes(neededRole);
    }
}

module.exports = AuthController;