// User Interface Logic
import './styles.css';
import { Journal } from './journal';

$(document).ready(function() {
let usersJournal = new Journal();

  $("form#journalEntry").submit(function(event){
    event.preventDefault();
    const userTitle = $("input#titleField").val();
    const userEntry = $("input#entryField").val();
    usersJournal.getWordCount(userEntry, usersJournal.wordCount);
    usersJournal.putInTitle(usersJournal.title, userTitle);
    usersJournal.putInEntry(usersJournal.entry, userEntry);
    usersJournal.countVowelsAndConsonants(userEntry, usersJournal.vowels, usersJournal.consonants);
  });
});