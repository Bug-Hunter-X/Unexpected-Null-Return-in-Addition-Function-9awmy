function foo(a, b) {
  if (a === null || b === null) {
    return null; //This is where the bug is.
  }
  return a + b; 
}