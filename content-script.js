// Save Type List to Local Storage.
chrome.storage.local.get("thisTypeList", (results) => {
    // create array of type IDs.
    let arrayThisTypeList = []
    results.thisTypeList.forEach(e => {
        arrayThisTypeList.push(e.fontId);
    })
    // stringify and add to local storage
    localStorage.setItem('thisTypeList', JSON.stringify(arrayThisTypeList))
});