
var someArray = [];
// fill the array, for example with someArray.push() method

// now some filtering snippets:

// use === only if certain of type string/number, 
// otherwise use == 
someArray.filter(function(one) {  return (one.someField == "someValue"); })

// finding the ones with prefix
someArray.filter(function(one) { return one.someField.startsWith("somePrefix"); });

