// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  return str.split(' ').map(word => {
    const letter = word.replace(/\d/g,'') || ''
    const swap = letter.length > 2 ? letter[letter.length-1] + letter.slice(1,letter.length-1) + letter[0] : letter.length === 2 ? letter[1] + letter[0] : letter
    const code = String.fromCharCode(word.replace(/\D/g,''))
    return code + swap
  }).join(' ')
}; 