const journalEntry = {
        Date: "4/17/2020",
        Concept: "Working with DOMs",
        Entry: "Finishing up practice DOMs",
        Mood:"Happy"
}

const journalEntry2 = {
        Date: "4/16/2020",
        Concept: "Working with functions",
        Entry: "Finishing up practice functions",
        Mood:"Happy"
}

const journalEntry3 = {
        Date: "4/15/2020",
        Concept: "Working with Java/Journal",
        Entry: "Finishing up practice Java/Journal",
        Mood:"Happy"
}

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
}
const Diary = []

Diary.push(journalEntry)
Diary.push(journalEntry2)
Diary.push(journalEntry3)


console.log(Diary)


const printJournalEntries = (journalEntryArray) => {
    let htmlString = ""
    journalEntryArray.forEach((journalObjectInLoop) => {
         htmlString += makeJournalEntryComponent(journalObjectInLoop);
    // collects the information from the array
    })
    document.querySelector(".entryLog").innerHTML = htmlString
}

printJournalEntries(Diary)

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
    Diary.push(journalEntryObject)
    printJournalEntries(Diary)
    }

    document.querySelector("#journalBtn").addEventListener("click", entryEvent)