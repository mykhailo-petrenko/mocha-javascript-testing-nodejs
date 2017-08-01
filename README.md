= Testing with mocha

== Install 
To be able run mocha from console
npm i -g mocha

To install mocha as dev dependency
npm i -D mocha

== Tesing
=== How to run tests
Run all tests in ./test/ directory
mocha

Run tests in all subfolders of test by mask *.spec.js
mocha "./test/**/*.spec.js"

=== What is in Assert
Assert throwing AssertionError exception in case of error.
Fot test passing should not be throwed any exceptions.

