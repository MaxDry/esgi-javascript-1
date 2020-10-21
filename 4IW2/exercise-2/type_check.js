function type_check_v1(variable, type) {
  switch (typeof variable) {
    case "symbol":
    case "number":
    case "string":
    case "boolean":
    case "undefined":
    case "function":
      return type === typeof variable;
    case "object":
      switch (type) {
        case "null":
          return variable === null;
        case "array":
          return Array.isArray(variable);
        default:
          return variable !== null && !Array.isArray(variable);
      }
  }
}

console.log(type_check_v1(null, "null") === true);
console.log(type_check_v1(null, "object") === false);
console.log(type_check_v1(undefined, "undefined") === true);
