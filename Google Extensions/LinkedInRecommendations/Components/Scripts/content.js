const friendInfo = (e) => {
    console.log(e);
  };
  
  const ready = () => {
    let FriendListEl = document.getElementsByClassName(
      "mn-connection-card__name"
    );
    let FriendActionsEl = document.getElementsByClassName(
      "mn-connection-card__action-container"
    );
    console.log(FriendListEl);
    console.log(FriendListEl.length);
    for (let i = 0; i < FriendListEl.length; i++) {
      console.log(FriendListEl[i].innerText);
      let newButton = document.createElement("button");
      newButton.setAttribute("id", FriendListEl[i].innerText);
      newButton.className = "recomend";
      newButton.innerText = "Recommend";
      newButton.addEventListener("click", friendInfo);
      FriendActionsEl[i].appendChild(newButton);
    }
    // send message back to popup script
    chrome.runtime.sendMessage(null, "Yes");
  };
  
  setTimeout(ready, 3000); 