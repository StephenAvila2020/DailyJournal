const journalEntry = {
    Entry: "4/17/2020",
    Covered: "Working with DOMs",
    Text: "Finishing up practice DOMs",
    Mood:"Happy"

};

const journalEntry2 = {
    Entry: "4/16/2020",
    Covered: "Working with functions",
    Text: "Finishing up practice functions",
    Mood:"Mad"

};

const journalEntry3 = {
    Entry: "4/15/2020",
    Covered: "Working with Java/Journal",
    Text: "Finishing up practice Java/Journal",
    Mood:"Tired"

};

const Diary = []

Diary.push(journalEntry)
Diary.push(journalEntry2)
Diary.push(journalEntry3)

console.log(Diary)

const makeJournalEntryComponent = (journalEntry)=>{
       return `
    <section class="flex-container">
        <h1>${journalEntry.Entry}</h1>
        <br>
        <h3>${journalEntry.Covered}</h3>
        <p>${journalEntry.Text}</p>
        <h4>${journalEntry.Mood}</h4>
    </section>
    `
}

// const htmlString = makeJournalEntryComponent(journalEntry)
// console.log(htmlString)

// for(singleEntry of Diary){
//     let domEntry = makeJournalEntryComponent(singleEntry)

//     document.querySelector(".entryLog").innerHTML += domEntry
// }








const renderJournalEntries = (entries) => {
    for(singleEntry of entries){
        let domEntry = makeJournalEntryComponent(singleEntry)
    
        document.querySelector(".entryLog").innerHTML += domEntry
    }
}

renderJournalEntries(Diary)