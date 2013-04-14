var GenericArray = function (T) {

  // validation
  if (!T) throw "T is a required field";

  // private instance variables
  var type = T,
      elements = [];

  // public instance variables
  this.length = function () { return elements.length };

  // private methods
  function isOfType (element) {
    return element instanceof type;
  }

  //public methods
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
