// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
  const pos = 'abcdefghijklmnopqrstuvwxyz'.indexOf(letter) + 1
  return `Position of alphabet: ${pos}`
}