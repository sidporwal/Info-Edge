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

let currentUserInfo;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  // First, validate the message's structure.
  if (msg.from === "content" && msg.subject === "userInfo") {
    currentUserInfo = msg.data;
    console.log(msg.data);
    fetch("http://10.120.9.102:5556/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: currentUserInfo.mail,
      },
      body: JSON.stringify(currentUserInfo),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.error(error);
      });
  }
  if (msg.from === "content" && msg.subject === "connectionsInfo") {
    console.log(currentUserInfo.mail);
    console.log(msg.data);
    fetch("http://10.120.9.102:5556/linkedIn/connections/save/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: currentUserInfo.mail,
      },
      body: JSON.stringify(msg.data),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.error(error);
      });
  }
  if (msg.from === "content" && msg.subject === "connectionsMailInfo") {
    console.log(currentUserInfo.mail);
    console.log(msg.data);
    fetch(
      "http://10.120.9.102:5556/linkedIn/connections/save/profile/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Token: currentUserInfo.mail,
        },
        body: JSON.stringify(msg.data),
      }
    )
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.error(error);
      });
  }
});

// chrome.extension.getURL('popup.html')
