// const addRecommendations = (userObj) => {
//   selectedContacts.push(userObj);

//   // Inform the background page that this tab should have a page-action.
//   chrome.runtime.sendMessage({
//     from: "content",
//     subject: "showPageAction",
//   });

//   // Listen for messages from the popup.
//   chrome.runtime.onMessage.addListener((msg, sender, response) => {
//     // First, validate the message's structure.
//     if (msg.from === "popup" && msg.subject === "DOMInfo") {
//       // Collect the necessary data.
//       // Directly respond to the sender (popup), through the specified callback.
//       response(selectedContacts);
//     }
//   });
// };

const fetchFriends = (connLen) => {
  let prevLen = 0, i = 0, currLen = 0;
  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      window.scrollTo(0, document.body.scrollHeight);
      let FriendListEl = document.getElementsByClassName(
        "mn-connection-card__name"
      );
      const showMoreBtn = document.getElementsByClassName("scaffold-finite-scroll__load-button");
      if (showMoreBtn[0]) {
        showMoreBtn[0].click();
      }
      prevLen = currLen;
      currLen = FriendListEl.length;
      if (prevLen === currLen) {
        i++;
      } else {
        i = 0;
      }
      console.log(FriendListEl.length);
      if (FriendListEl.length == parseInt(connLen) || i === 60) {
        resolve(intervalId);
        clearInterval(intervalId);
      }
    }, 1000);
  })
}

const ready = () => {
  const connLen = document.querySelector("#ember45 > header > h1").innerText.split(" ")[0];
  console.log(connLen);
  fetchFriends(connLen).then((intervalId) => {
    clearInterval(intervalId);
    const FriendListElName = document.getElementsByClassName(
      "mn-connection-card__name"
    );
    const FriendListElOccupation = document.getElementsByClassName("mn-connection-card__occupation");
    const FriendListEl = document.getElementsByClassName(
      "mn-connection-card"
    );
    const FriendListElProfileUrl = document.getElementsByClassName("mn-connection-card__link");
    const FriendListElProfileImgUrl = document.getElementsByClassName("presence-entity__image   EntityPhoto-circle-5 lazy-image ember-view");
    const data = [];
    for (let i = 0; i < FriendListEl.length; i++) {
      const userInfo = {
        profileUrl: FriendListElProfileUrl[i].href,
        profileImgUrl: FriendListElProfileImgUrl[i].currentSrc,
        name: FriendListElName[i].innerText,
        occupation: FriendListElOccupation[i].innerText
      };
      data.push(userInfo);
    }
    console.log(data);
  });
};

setTimeout(ready, 5000);
