function match(a, b) {
  console.log(a + " " + b);
  // verify that b is <= a
    if (b.length > a.length) {
      console.log(false);
      return false
    };
  
  // find if 1st index of b exists in a
  for (i = 0; i < a.length; i++) {
    if (b[0] === a[i]) {
      let subsetA = a.slice(i, b.length + i);
      if (b === subsetA) {
        console.log(true);
        return true;
      };
    }
  }
 
  // if false, return false
  console.log(false);
  return false;
}

// Test #1
match("bananas", "nanas");
// Test #2
match("bananas", "ban");
// Test #3
match("bananas", "banana bread");
// Test #4
match(" ", "nanas");
// Test #5
match("bananas", " ");