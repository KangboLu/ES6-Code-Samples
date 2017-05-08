// function to get a string as input and check if parenthesis are balanced
function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) {return previous;} // for wrong order
    if (char === "(") {return ++previous;} // for ( counting
    if (char === ")") {return --previous;} // for ) counting

    return previous; // for not parenthesis
  }, 0); // initial state of counter is 0
}

// output the testing result
console.log("Parenthesis of this string '((' is balanced: " + balancedParens("(("));
console.log("Parenthesis of this string '(())' is balanced: " + balancedParens("(())"));
console.log("Parenthesis of this string ')(' is balanced: " + balancedParens(")("));
console.log("Parenthesis of this string '(asdhkashdjad)' is balanced: " + balancedParens("(asdhkashdjad)"));