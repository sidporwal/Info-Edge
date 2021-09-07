const urls_list = [
  "https://www.linkedin.com/mynetwork/invite-connect/connections/",
];

//-------------------------------------------------------------------------------------------

const createUserCard = (userInfo) => {
  const divEl = document.createElement("div");
  divEl.setAttribute("class", "userCard");

  const infoDivEl = document.createElement("div");
  infoDivEl.setAttribute("class", "userDetails");

  const headingEl = document.createElement("h1");
  headingEl.textContent = userInfo.username;

  const subHeadingEl = document.createElement("h3");
  subHeadingEl.textContent = userInfo.occupation;

  const crossEl = document.createElement("i");
  crossEl.setAttribute("class", "fa fa-remove");

  const linkEl = document.createElement("a");
  linkEl.setAttribute("href", userInfo.profileLink);
  linkEl.textContent = userInfo.profileLink;

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", userInfo.profileImgUrl);
  imgEl.setAttribute("height", "60");
  imgEl.setAttribute("width", "60");

  divEl.appendChild(imgEl);
  infoDivEl.appendChild(headingEl);
  infoDivEl.appendChild(subHeadingEl);
  infoDivEl.appendChild(linkEl);
  infoDivEl.appendChild(crossEl);
  divEl.appendChild(infoDivEl);

  document.getElementById("div_1").appendChild(divEl);
};

// Update the relevant fields with the new data.
const setDOMInfo = (info) => {
  for (let i = 0; i < info.length; i++) {
    createUserCard(info[i]);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { from: "popup", subject: "DOMInfo" },
        setDOMInfo
      );
    }
  );
});

//-------------------------------------------------------------------------------------------

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
