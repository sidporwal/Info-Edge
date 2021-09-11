startNavigation.onclick = function (element) {
  // query the current tab to find its id
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {
      const url = "https://www.linkedin.com/mynetwork/invite-connect/connections/";
      const tab_id = tabs[0].id;

      // update current tab with new url
      chrome.tabs.update({ url: url });

      // fired when tab is updated
      chrome.tabs.onUpdated.addListener(function openPage(tabID, changeInfo) {
        // tab has finished loading, validate whether it is the same tab
        if (tab_id == tabID && changeInfo.status === "complete") {
          // remove tab onUpdate event as it may get duplicated
          chrome.tabs.onUpdated.removeListener(openPage);

          // execute content script
          chrome.scripting.executeScript(
            {
              target: { tabId: tabID, allFrames: true },
              files: ["./Components/Scripts/fetchConnections.js"],
            },
          );
        }
      });
    }
  );
};

startFetchingUserInfo.onclick = function (element) {
  // query the current tab to find its id
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {
      const url = "https://www.linkedin.com/mynetwork/invite-connect/connections/";
      const tab_id = tabs[0].id;

      // update current tab with new url
      chrome.tabs.update({ url: url });

      // fired when tab is updated
      chrome.tabs.onUpdated.addListener(function openPage(tabID, changeInfo) {
        // tab has finished loading, validate whether it is the same tab
        if (tab_id == tabID && changeInfo.status === "complete") {
          // remove tab onUpdate event as it may get duplicated
          chrome.tabs.onUpdated.removeListener(openPage);

          // execute content script
          chrome.scripting.executeScript(
            {
              target: { tabId: tabID, allFrames: true },
              files: ["./Components/Scripts/fetchUserInfo.js"],
            },
          );
        }
      });
    }
  );
}
