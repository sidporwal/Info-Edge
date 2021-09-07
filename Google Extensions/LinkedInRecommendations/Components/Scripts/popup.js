const urls_list = [
  "https://www.linkedin.com/mynetwork/invite-connect/connections/",
];

startNavigation.onclick = function (element) {
  // query the current tab to find its id
  chrome.tabs.query(
    { active: true, currentWindow: true },
    async function (tabs) {
      for (let i = 0; i < urls_list.length; i++) {
        // navigate to next url
        await goToPage(urls_list[i], i + 1, tabs[0].id);

        // wait for 5 seconds
        await waitSeconds(5);
      }
    }
  );
};

async function goToPage(url, url_index, tab_id) {
  return new Promise(function (resolve, reject) {
    // update current tab with new url
    chrome.tabs.update({ url: url });

    // fired when tab is updated
    chrome.tabs.onUpdated.addListener(function openPage(tabID, changeInfo) {
      // tab has finished loading, validate whether it is the same tab
      if (tab_id == tabID && changeInfo.status === "complete") {
        // remove tab onUpdate event as it may get duplicated
        chrome.tabs.onUpdated.removeListener(openPage);

        // fired when content script sends a message
        chrome.runtime.onMessage.addListener(
          (message, sender, sendResponse) => {
            alert("I am popup");
            sendResponse({
              data: "I am fine, thank you. How is life in the background?",
            });
          }
        );

        // execute content script
        chrome.scripting.executeScript(
          {
            target: { tabId: tabID, allFrames: true },
            files: ["./Components/Scripts/content.js"],
          },
          function () {
            // resolve Promise after content script has executed
            resolve();
          }
        );
      }
    });
  });
}

// async function to wait for x seconds
async function waitSeconds(seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, seconds * 1000);
  });
}
