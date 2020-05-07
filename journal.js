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




const printJournalEntries = (journalEntryArray) => {
    let htmlString = ""
    journalEntryArray.forEach((journalObjectInLoop) => {
         htmlString += makeJournalEntryComponent(journalObjectInLoop);
    // collects the information from the array
    })
    document.querySelector(".entryLog").innerHTML = htmlString
}

printJournalEntries(Diary)

// In your Daily Journal form, add an event listener to the submit/ save button. The callback function for your event listener should do the following things:

// Capture the values the user entered into your form fields.
// Once you have the values of the text inputs in your JavaScript, build them into an object that looks like this:
// {
//     date: dateValue,
//     concept: conceptValue,
//     entry: entryValue,
//     mood: moodValue
// }
// Once you've build the object representing a single jouranl entry, use the .push() method to add it to your array of journal entries.
// If you already have a function that prints the entire array of object to the DOM, call it inside your submit button event listener to reprint all of your journal entries. If you don't, revisit Daily Journal - Part 3

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

    //Built my API and now building a Fetch 
    fetch("http://localhost:3000/entries")
    .then((entries) => entries.json())
    .then((parsedEntries) => {
        console.log(parsedEntries)
        printJournalEntries(Diary)
    })