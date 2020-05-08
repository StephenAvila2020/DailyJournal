
const Diary = []
//builds a journal entry component and prints it to the DOM
const makeJournalEntryComponent = (journalEntry)=>{
    return `
 <section class="flex-container">
     <h1>${journalEntry.Date}</h1>
     <br>
     <h3>${journalEntry.Concept}</h3>
     <p>${journalEntry.Entry}</p>
     <h4>${journalEntry.Mood}</h4>
 </section>
 `
};
const renderJournalEntries = (entries) => {
    let htmlString = ""
    entries.forEach((journalObjectInLoop) => {
         htmlString += makeJournalEntryComponent(journalObjectInLoop);
    // collects the information from the api
    })
    document.querySelector(".entryLog").innerHTML = htmlString
};

// Made an event listener that gathers user input values 
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

    document.querySelector("#journalBtn").addEventListener("click", entryEvent)

    

    

    //Built my API and now building a Fetch 
    fetch("http://localhost:3000/entries")
    .then((entries) => entries.json())
    .then((entries) => {
        console.log(entries)
        renderJournalEntries(entries)
    })
    }
    
    

  