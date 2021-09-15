chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "https://www.linkedin.com/feed/" }, (tab) => {
    // execute content script
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["./Components/Scripts/injectSideBar.js"],
      });
    }, 5000);
  });
});

// chrome.runtime.onMessage.addListener((msg, sender) => {
//   // First, validate the message's structure.
//   if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
//     // Enable the page-action for the requesting tab.
//     chrome.pageAction.show(sender.tab.id);
//   }
// });

// chrome.extension.getURL('popup.html')
