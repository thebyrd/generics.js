var GenericArray = function (T) {

  // validation
  if (!T) throw "A type is required for this array.";

  // private instance variables
  var type = T,
      elements = [];

  // private methods
  function isOfType (element) {
    return element instanceof type;
  }

  //public methods
  this.size = function () { 
    return elements.length 
  };
  
  this.add = function (element, index) {
    if (isOfType(element)) {
      index ? elements.insert(index, element) : elements.push(element);
    } else {
      throw new Error("Element is not of type " + type);
    }
  };

  this.get = function (index) {
    return elements[index];
  };

  this.pop = function () {
    return elements.pop();
  };
};
