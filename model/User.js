class User {
    constructor(roles) {
        this.roles = roles;
    }

    isAuthorised(neededRole) {
        return this.roles.includes(neededRole);
    }

    setRoles(roles) {
        this.roles = roles;
    }
}

module.exports = User;