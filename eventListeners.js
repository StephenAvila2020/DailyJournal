
import apiManager from "./apiManager.js";
import renderJournalEntries from "./domPrinter.js";

const entryEvent = () => {
    const entryDate = document.querySelector("#journalDate").value;
    const entryConcept = document.querySelector("#journalConcept").value;
    const entryEntry = document.querySelector("#journalEntry").value;
    const entryMood = document.querySelector("#mood").value;


    const journalEntryObject = {
        Date: entryDate,
        Concept: entryConcept,
        Entry: entryEntry,
        Mood: entryMood,
    }


    document.querySelector("#journalContainer").innerHTML = "";

    apiManager.getAllJournalsFromAPI().then((entries) => {
        renderJournalEntries(entries)
    })

}

export default entryEvent