// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {
  let i = string.length-1;
  while (string[i] === '!') {
    i--;
  }
  return string.slice(0, i+1);
}