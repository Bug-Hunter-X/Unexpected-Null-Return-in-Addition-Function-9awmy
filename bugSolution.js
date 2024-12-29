function foo(a, b) {
  //More robust check to handle null, undefined, and other falsy values
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; //Return 0 for null/undefined inputs. You could also throw an error or use another strategy
  }
  //Explicit type coercion to ensure that the sum happens correctly.
  return Number(a) + Number(b);
}