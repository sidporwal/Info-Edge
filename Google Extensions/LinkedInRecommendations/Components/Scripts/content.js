let FriendListEl = document.getElementsByClassName("mn-connection-card__name");
console.log(FriendListEl);
console.log(FriendListEl.length);

// send message back to popup script
chrome.runtime.sendMessage(null, "Yes");
