const User = require('../model/User');

class AuthController {

    setUser(user) {
        if ( !(user instanceof User) ) {
            throw("Param should be instace of User");
        }

        this.user = user;
    }

    setRoles(roles) {
        if (this.user) {
            this.user.setRoles(roles);
        }
    }


    isAuthorised(neededRole) {
        if (this.user) {
            return this.user.isAuthorised(neededRole);
        }
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

    getIndex(req, res) {
        try {
            if (req.user.isAuthorised('admin')) {
                res.render('index');
            } else {
                res.render('error');
            }
        } catch(e) {
            res.render('exception');
        }
    }
}

module.exports = AuthController;