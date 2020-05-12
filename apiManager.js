const apiManager = {
    getAllJournalsFromAPI: () => {
        return fetch("http://localhost:3000/entries")
        .then(entries => entries.json())
      }

    }

    export default apiManager;