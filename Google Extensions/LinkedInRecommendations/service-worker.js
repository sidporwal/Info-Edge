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

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  // First, validate the message's structure.
  if (msg.from === "content" && msg.subject === "userInfo") {
    console.log(msg.data);
    fetch("http://10.120.9.102:5556/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: msg.data.mail,
      },
      body: JSON.stringify(msg.data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  if (msg.from === "content" && msg.subject === "connectionsInfo") {
    console.log(msg.data);
    const { connectionsData, currentUserDeatils } = msg.data;
    fetch("http://10.120.9.102:5556/linkedIn/connections/save/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: currentUserDeatils.mail.replace("gmail", "mailsac"),
      },
      body: JSON.stringify(connectionsData),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.error(error);
      });
  }
  if (msg.from === "content" && msg.subject === "connectionsMailInfo") {
    console.log(msg.data);
    const { connectionsMail, currentUserDeatils } = msg.data;
    fetch(
      "http://10.120.9.102:5556/linkedIn/connections/save/profile/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Token: currentUserDeatils.mail.replace("gmail", "mailsac"),
        },
        body: JSON.stringify(connectionsMail),
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
