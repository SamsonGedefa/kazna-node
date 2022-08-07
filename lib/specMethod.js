function specMethod(spec) {
  

  return function (...args) {
    const callback = typeof args[args.length - 1] == "function" && args.pop();



   
  
    return arguments;
  };
}

module.exports = specMethod;
