// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  if (str === "") return "";
  return str.split(/[-_]/g).reduce((acc, c, index) => {
    if (index === 0) {
      return acc + c;
    } else {
      return acc + c[0].toUpperCase() + c.slice(1);
    }
  }, "");
}
