// typescript
var message = "Hello world";
console.log(message);
/*
Notes:
1. use of var. Is this because the tutorial is old or because var is somehow
   preferred over let/const in TS?
    ASK 20181003: Old. Also, note TS compiles to ES3 by default (which will turn
    all lets and consts to vars). To get expected behaviour compile with
    the `--target es6` flag

2. type annotation:
    - Is this required?
    - What does the JS look like if no type annotation provided?
    - Does TS do type inference if no type annotation is provided?
3. No trailing semicolon. What are the semicolon rules in TS?
*/
