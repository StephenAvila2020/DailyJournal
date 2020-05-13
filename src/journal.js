import apiManager from "./apiManager.js"
import renderJournalEntries from "./domPrinter.js"



// Add a click event listener to the Journal Entry button

document.querySelector("#journalBtn").addEventListener("click", function () {

    const entryDate = document.querySelector("#journalDate").value;
    const entryConcept = document.querySelector("#journalConcept").value;
    const entryEntry = document.querySelector("#journalEntry").value;
    const entryMood = document.querySelector("#mood").value;

        console.log(entryConcept,entryDate,entryMood,entryEntry)
    const journalEntryObject = {
        Date: entryDate,
        Concept: entryConcept,
        Entry: entryEntry,
        Mood: entryMood,
    };

    fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(journalEntryObject)
}).then(() => {

    document.querySelector("#journalContainer").innerHTML = "";

    apiManager.getAllJournalsFromAPI().then((entries) => {
        renderJournalEntries(entries)
    })
})

    
})


        

    
    
    


    
    
    


  