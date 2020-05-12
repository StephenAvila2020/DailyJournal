import apiManager from "./apiManager.js"
import renderJournalEntries from "./domPrinter.js"
import entryEvent from "./eventListeners.js"

//Print all of the Journal entries
apiManager.getAllJournalsFromAPI().then((entries) => {
    console.log(entries)
    renderJournalEntries(entries)
})

// Add a click event listener to the Journal Entry button

document.querySelector("#journalBtn").addEventListener("click", entryEvent)
        console.log(entryEvent)

    
    
    


    
    
    


  