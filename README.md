# Testing with mocha

## Install 
To be able run mocha from console
```
npm i -g mocha
```

To install mocha as dev dependency
```
npm i -D mocha
```

## Tesing
### How to run tests
Run all tests in ./test/ directory
mocha

Run tests in all subfolders of test by mask *.spec.js
```
mocha "./test/**/*.spec.js"
```

### What is in Assert
Assert throwing AssertionError exception in case of error.
Fot test passing should not be throwed any exceptions.

### Pending Tests
* it("with description") // and without function displays as pending test
* Use describe.only(..) or it.only(..) to run selecter tests and skip other tests
* Skip tests: describe.skip(..), it.skip(..) or this.skip() for it('', callback)

### Chai BDD Style
http://chaijs.com/api/bdd/

#### Install
```
npm i -D chai chai-as-promised
```

```javascript
const chai = require('chai');
const chaiAsPrimised = require('chai-as-promised');
chai.use(chaiAsPrimised); // Use middleware to tests promices
const should = chai.should();
```

#### Usage
```javascript
// Object properties
foobar.should.have.property('name').and.equal('John')
// Compagre objects
objectUno.should.deep.equal(objectDos);
// Null
should.not.exist(stolenObject);
// Promises
return getPromiseAsResponse().should.eventually.be.true;
```
