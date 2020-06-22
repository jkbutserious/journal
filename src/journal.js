// Business Logic
export function Journal (title, entry, wordCount, vowels, consonants) {
  this.title = title,
  this.entry = entry,
  this.wordCount = wordCount,
  this.vowels = vowels,
  this.consonants = consonants
};

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