// activate extension when host is www.linkedin.com
chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "www.linkedin.com" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

// chrome.runtime.onMessage.addListener((msg, sender) => {
//   // First, validate the message's structure.
//   if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
//     // Enable the page-action for the requesting tab.
//     chrome.pageAction.show(sender.tab.id);
//   }
// });