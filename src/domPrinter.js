//Builds a journal entry component and prints it to the DOM

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
    document.querySelector(".entryLog").innerHTML = ""
    entries.forEach(journalObjectInLoop => {
       const   htmlString = makeJournalEntryComponent(journalObjectInLoop);
       console.log(journalObjectInLoop)
    document.querySelector(".entryLog").innerHTML += htmlString
    })
    
}

export default renderJournalEntries