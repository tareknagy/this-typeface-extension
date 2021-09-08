let thisTypeList;

chrome.runtime.onInstalled.addListener(() => {
    // query list of available fonts and save
    chrome.fontSettings.getFontList( async (results) => {
        thisTypeList = await results
        // use local storage instead of sync so that each computer generates it's own font list
        chrome.storage.local.set({ thisTypeList });
    })
});