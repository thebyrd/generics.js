# generics.js #
## overview ##
Sometimes it makes sense to have stricly typed collections in javascript, but not have to hardcode the types you're checking for. I've just started experimenting with elegant ways to do this.
## example ##
``` javascript
function Crazy (a) { 
  this.a = a;
} 

var crazies = new GenericArray(Crazy);

crazies.add(new Crazy('this'));
crazies.add(new Crazy('that'));
crazies.get(1); // returns a crazy object where a is 'that'
crazies.length // returns 2
crazies.add({a : 'anything'}); //throws an error

```