// Business Logic
export function Journal (title, entry, wordCount, vowels, consonants) {
  this.title = title,
  this.entry = entry,
  this.wordCount = wordCount,
  this.vowels = vowels,
  this.consonants = consonants
}

Journal.prototype.getWordCount = function(journalEntry, entryLength) {
  let words = [];
  let wordsLength = 0;
  words = journalEntry.split(" ");
  wordsLength = words.length;
  entryLength.push(wordsLength)
};

Journal.prototype.putInTitle = function (journalTitle, usersTitle){
  journalTitle.push(usersTitle)
};

Journal.prototype.putInEntry = function (entryInfo, usersEntry){
  entryInfo.push(usersEntry)
};

Journal.prototype.countVowelsAndConsonants = function(journalEntry, journalVowels, journalConsonants) {
  let letters = [];
  let vowels = 0;
  let consonants = 0;

  letters = (journalEntry.toLowerCase()).split("");
  for (i = 0; i < letters.length; i++) {
    if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters [i] === "o" || letters [i] === "u") {
      vowels += 1;
      return vowels
    }
    else {
      consonants += 1;
      return consonants
    }
  }
  journalVowels.push(vowels);
  journalConsonants.push(consonants);
}