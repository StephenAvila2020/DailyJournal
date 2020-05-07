// const makeJournalEntryComponent = (journalEntry)=>{
//     return `
//  <section class="flex-container">
//      <h1>${journalEntry.Entry}</h1>
//      <br>
//      <h3>${journalEntry.Covered}</h3>
//      <p>${journalEntry.Text}</p>
//      <h4>${journalEntry.Mood}</h4>
//  </section>
//  `
// }

// const printJournalEntries = (journalEntryArray) => {
//     journalEntryArray.forEach((journalObjectInLoop) => {
//         const htmlString = makeJournalEntryComponent(journalObjectInLoop);
    
//         document.querySelector(".entryLog").innerHTML += htmlString
//     })
// }