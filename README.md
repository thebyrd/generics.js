# Generics.js #
## Overview ##
Sometimes it makes sense to have stricly typed collections in javascript, but not if you have to hardcode the types you're checking for. I've just started experimenting with elegant ways to do this.
## Example ##
``` javascript
function Thing (a) { 
  this.a = a;
} 

var things = new GenericArray(Thing);

things.add(new Thing('this'));
things.add(new Thing('that'));
things.get(1); // returns a Thing where a is 'that'
things.length // returns 2
things.add({a : 'anything'}); //throws an error

```
