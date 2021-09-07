const selectedContacts = [];

const addRecommendations = (userObj) => {
  selectedContacts.push(userObj);

  // Inform the background page that this tab should have a page-action.
  chrome.runtime.sendMessage({
    from: "content",
    subject: "showPageAction",
  });

  // Listen for messages from the popup.
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    // First, validate the message's structure.
    if (msg.from === "popup" && msg.subject === "DOMInfo") {
      // Collect the necessary data.
      // Directly respond to the sender (popup), through the specified callback.
      response(selectedContacts);
    }
  });
};

const friendInfo = (e) => {
  const profileText = e.path[2].innerText.split("\n");
  const profileName = profileText[1];
  const profileOccupation = profileText[3];
  const profileLink = e.path[2].getElementsByClassName(
    "ember-view mn-connection-card__picture"
  )[0].href;
  const profileImgUrl = e.path[2].getElementsByClassName(
    "ember-view mn-connection-card__picture"
  )[0].firstChild.parentNode.children[0].firstElementChild.currentSrc;

  addRecommendations({
    username: profileName,
    occupation: profileOccupation,
    profileLink: profileLink,
    profileImgUrl: profileImgUrl,
  });
};

const ready = () => {
  let FriendListEl = document.getElementsByClassName(
    "mn-connection-card__name"
  );
  let FriendActionsEl = document.getElementsByClassName(
    "mn-connection-card__action-container"
  );
  // let FriendListEl = document.getElementsByClassName("mn-connection-card");

  for (let i = 0; i < FriendListEl.length; i++) {
    console.log(FriendListEl[i].innerText);
    let newButton = document.createElement("button");
    newButton.setAttribute("id", FriendListEl[i].innerText);
    newButton.className =
      "message-anywhere-button artdeco-button artdeco-button--secondary";
    newButton.innerText = "Recommend";
    newButton.addEventListener("click", friendInfo);
    FriendActionsEl[i].appendChild(newButton);
  }
  // send message back to popup script
  chrome.runtime.sendMessage(
    { data: "Hello popup, how are you" },
    (response) => {
      console.log(response);
    }
  );
};

setTimeout(ready, 3000);
