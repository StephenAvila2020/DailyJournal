const journalEntry = {
    dateofEntry: "4/17/2020",
    conceptsCovered: "Working with DOMs",
    entryText: "Finishing up practice DOMs",
    dailyMood:"Happy"

};

const journalEntry2 = {
    dateofEntry: "4/16/2020",
    conceptsCovered: "Working with functions",
    entryText: "Finishing up practice functions",
    dailyMood:"Mad"

};

const journalEntry3 = {
    dateofEntry: "4/15/2020",
    conceptsCovered: "Working with Java/Journal",
    entryText: "Finishing up practice Java/Journal",
    dailyMood:"Tired"

};

const makeJournalEntryComponent = (journalEntry)=>{
       return `
    <form class="flex-container">
    <label>${journalEntry.dateofEntry}</label>
    <label>${journalEntry.conceptsCovered}</label>
    <label>${journalEntry.entryText}</label>
    <label>${journalEntry.dailyMood}</label>
    </form>
    `
}
const htmlString = makeJournalEntryComponent(journalEntry)
console.log(htmlString)


const journalEntriesArray = [journalEntry,journalEntry2,journalEntry3];

// journalEntriesArray.push(journalEntry,journalEntry2,journalEntry3)

console.log(journalEntriesArray)


// const renderJournalEntries = (journalEntriesArray) => {

// }

// renderJournalEntries(journalEntriesArray)