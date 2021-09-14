const HTML_TEMPLATE =
  '<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Popup</title><style>*{margin:0;padding:0;border:0;outline:0}.RSPBstep{display:inline-flex;justify-content:center;align-items:center;z-index:0;position:absolute;transform:translateX(-50%);transition-property:all;transition-timing-function:ease}.RSPBprogression{position:absolute;transition:width .3s ease;left:0;top:0;bottom:0;border-radius:10px;background:rgba(0,116,217,.8);z-index:-1;height:10px}.step-progress-titles-section{color:#000;display:flex;font-weight:700;margin-top:16px}.step-progress-title{flex:1;align-content:center;text-align:center;font-size:10px}.main-outer{height:100%}.screen-decor{margin-left:16px;margin-right:16px;height:100%;margin-top:8%}.onboarding-button{background-color:#55efc4;width:100%;height:48px;margin-top:64px;color:#000;border-radius:8px;font-weight:500;font-size:medium;padding:5px 10px;cursor:pointer;-webkit-transition-duration:.4s;transition-duration:.4s}.onboarding-button:hover{box-shadow:0 12px 16px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)}.small-heading-text{font-size:small}.indexedStep{color:#fff;width:32px;height:32px;font-size:16px;background-color:#55efc4;border-radius:50%;display:flex;justify-content:center;align-items:center}.accomplished{background-color:#55efc4}.step-progress-outer{margin-left:32px;margin-right:32px;margin-top:8px}.RSPBprogressBar{height:10px;line-height:1;border-radius:10px;position:relative;background-color:hsla(0,0%,82.7%,.6);display:flex;justify-content:space-between;align-items:center;z-index:0}</style></head><body style="background-color:#f8f8ff"><div id="popup-root"><section id="popup" class="main-section" style="height:949px"><section><div class="step-progress-outer"><div class="RSPBprogressBar" style="background:#bbfcea;height:10px;margin-top:20px"><div class="RSPBstep" style="left:0;transition-duration:300ms;transform:translateX(-50%) scale(1)"><div class="indexedStep accomplished">1</div></div><div class="RSPBstep" style="left:25%;transition-duration:300ms;transform:translateX(-50%) scale(1)"><div class="indexedStep accomplished">2</div></div><div class="RSPBstep" style="left:50%;transition-duration:300ms;transform:translateX(-50%) scale(1)"><div class="indexedStep accomplished">3</div></div><div class="RSPBstep" style="left:75%;transition-duration:300ms;transform:translateX(-50%) scale(1)"><div class="indexedStep accomplished">4</div></div><div class="RSPBstep" style="left:100%;transition-duration:300ms;transform:translateX(-50%) scale(1)"><div class="indexedStep null">5</div></div><div class="RSPBprogression" style="background:linear-gradient(toright,#55efc4,#55efc4);width:75%"></div></div></div><div><section class="step-progress-titles-section"><h3 class="step-progress-title">Install<br>Extension</h3><h3 class="step-progress-title">Go to<br>Linkedin</h3><h3 class="step-progress-title">Sync<br>contacts</h3><h3 class="step-progress-title">Vouch for<br>friends</h3><h3 class="step-progress-title">Track<br></h3></section></div><div class="main-outer"><section class="screen-decor" style="background-position:70%40%"><h3 style="margin-top:20%;font-size:22px;margin-left:16px;font-weight:350"><span>Hi VIVEK, vouch for engineers from LinkedIn and earn</span></h3><h3 style="font-size:16px;margin-top:32px;margin-left:16px"><span style="color:#ff565e">👉 ₹1Lac</span>for successful hire<br></h3><h3 style="font-size:16px;margin-top:32px;margin-left:16px"><span style="color:#ff565e">👉 ₹1000</span>per interviewed candidate<br></h3><h3 style="font-size:16px;margin-top:32px;margin-left:16px"><span style="color:#ff565e">👉 ₹100</span>for making linkedin connections public<br></h3><button id="getListBtn" class="onboarding-button" style="margin-top:64px">Get list of LinkedIn connections to vouch</button><h1 class="small-heading-text" style="margin:16px;text-align:center">We are 100% secure.</h1></section></div></section></section></div></body></html>';

const fetchUserContactInfo = (iframeId) => {
  return new Promise((resolve, reject) => {
    try {
      let intervalId = setInterval(() => {
        const documentX = document.getElementById(iframeId).contentDocument;
        if (
          documentX.getElementsByClassName(
            "pv-contact-info__contact-type ci-email"
          )[0]
        ) {
          const profileUrl = documentX.getElementsByClassName(
            "pv-contact-info__contact-type ci-vanity-url"
          );
          const contactNo = documentX.getElementsByClassName(
            "pv-contact-info__contact-type ci-phone"
          );
          const mail = documentX.getElementsByClassName(
            "pv-contact-info__contact-type ci-email"
          );
          const address = documentX.getElementsByClassName(
            "pv-contact-info__contact-type ci-address"
          );
          const data = {
            profileUrl: profileUrl[0] && profileUrl[0].innerText.split("\n")[1],
            address: address[0] && address[0].innerText.split("\n")[1],
            mail: mail[0] && mail[0].innerText.split("\n")[1],
            contactNo: contactNo[0] && contactNo[0].innerText.split("\n")[1],
          };
          console.log(data);
          resolve(data);
          clearInterval(intervalId);
        }
      }, 1000);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

const goToProfilePage = (iframeId) => {
  return new Promise((resolve, reject) => {
    try {
      let intervalId = setInterval(() => {
        const documentX = document.getElementById(iframeId).contentDocument;
        if (
          documentX.getElementsByClassName(
            "ember-view link-without-visited-state cursor-pointer text-heading-small inline-block break-words"
          )[0]
        ) {
          clearInterval(intervalId);
          documentX
            .getElementsByClassName(
              "ember-view link-without-visited-state cursor-pointer text-heading-small inline-block break-words"
            )[0]
            .click();
          fetchUserContactInfo(iframeId).then((data) => {
            resolve(data);
          });
        }
      }, 1000);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

const fetchUserInfo = () => {
  return new Promise((resolve, reject) => {
    try {
      let intervalId = setInterval(() => {
        const documentX =
          document.getElementById("userInfoFrame").contentDocument;
        if (
          documentX.getElementsByClassName("global-nav__primary-link-text")[5]
        ) {
          documentX
            .getElementsByClassName("global-nav__primary-link-text")[5]
            .click();
          let intervalId2 = setInterval(() => {
            const documentX =
              document.getElementById("userInfoFrame").contentDocument;
            if (
              documentX.getElementsByClassName(
                "ember-view link-without-hover-state"
              )[0]
            ) {
              documentX
                .getElementsByClassName(
                  "ember-view link-without-hover-state"
                )[0]
                .click();
              goToProfilePage("userInfoFrame").then((data) => {
                resolve(data);
              });
              clearInterval(intervalId2);
            }
          }, 1000);
          clearInterval(intervalId);
        }
      }, 1000);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

const getUserInfoFrame = async () => {
  let iframe = document.createElement("iframe");
  iframe.id = "userInfoFrame";
  iframe.src = "https://www.linkedin.com/mynetwork/invite-connect/connections/";
  iframe.style =
    "position: fixed; top: 200px; left: 0px; height: 500px; width: 500px; z-index: -9999;";
  document.body.appendChild(iframe);
  try {
    await fetchUserInfo();
    // API Post Current Use
  } catch (error) {
    console.error(error);
  } finally {
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 10000);
  }
};

const fetchConnectionMail = (profileUrl) => {
  return new Promise((resolve) => {
    let iframe = document.createElement("iframe");
    iframe.id = profileUrl;
    iframe.src = `${profileUrl}detail/contact-info/`;
    iframe.style =
      "position: fixed; top: 200px; right: 0px; height: 500px; width: 500px; z-index: -9999;";
    document.body.appendChild(iframe);
    try {
      fetchUserContactInfo(profileUrl).then((values) => {
        const data = values;
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 5000);
        resolve(data);
      });
    } catch (error) {
      console.error(error);
    }
  });
};

let connectionsMail = [];
const fetchConnectionMails = async (data, i) => {
  if (i === data.length) {
    console.log(connectionsMail);
    return;
  }
  if (i % 10 === 0 && i != 0) {
    console.log(connectionsMail);
    connectionsMail = [];
  }
  const contactData = await fetchConnectionMail(data[i].profileUrl);
  connectionsMail.push(contactData);
  console.log(connectionsMail);
  fetchConnectionMails(data, i + 1);
};

const sendConnectionData = (prev, curr) => {
  const documentX = document.getElementById(
    "userConnectionFrame"
  ).contentDocument;
  const FriendListElName = documentX.getElementsByClassName(
    "mn-connection-card__name"
  );
  const FriendListElOccupation = documentX.getElementsByClassName(
    "mn-connection-card__occupation"
  );
  const FriendListElProfileUrl = documentX.getElementsByClassName(
    "mn-connection-card__link"
  );
  const FriendListElProfileImgUrl = documentX.getElementsByClassName(
    "presence-entity__image   EntityPhoto-circle-5 lazy-image ember-view"
  );
  const data = [];
  for (let i = prev; i < curr; i++) {
    const userInfo = {
      profileUrl: FriendListElProfileUrl[i].href,
      profileImgUrl: FriendListElProfileImgUrl[i].currentSrc,
      name: FriendListElName[i].innerText,
      occupation: FriendListElOccupation[i].innerText,
    };
    data.push(userInfo);
  }
  console.log(data);
  return data;
};

const fetchFriends = (connLen) => {
  let prevLen = 0,
    i = 0,
    currLen = 0;
  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      const documentX = document.getElementById(
        "userConnectionFrame"
      ).contentDocument;
      const windowX = document.getElementById(
        "userConnectionFrame"
      ).contentWindow;
      windowX.scrollTo(0, documentX.body.scrollHeight);
      let FriendListEl = documentX.getElementsByClassName(
        "mn-connection-card__name"
      );
      const showMoreBtn = documentX.getElementsByClassName(
        "scaffold-finite-scroll__load-button"
      );
      if (showMoreBtn[0]) {
        showMoreBtn[0].click();
      }
      prevLen = currLen;
      currLen = FriendListEl.length;
      if (prevLen === currLen) {
        i++;
      } else {
        i = 0;
        sendConnectionData(prevLen, currLen);
      }
      console.log(FriendListEl.length);
      if (FriendListEl.length == parseInt(connLen) || i === 60) {
        resolve(intervalId);
        clearInterval(intervalId);
      }
    }, 1000);
  });
};

const ready = () => {
  return new Promise((resolve, reject) => {
    try {
      const intervalId = setInterval(() => {
        const documentX = document.getElementById(
          "userConnectionFrame"
        ).contentDocument;
        if (documentX.getElementsByClassName("mn-connections__header")[0]) {
          const connLen = documentX
            .getElementsByClassName("mn-connections__header")[0]
            .innerText.split(" ")[0];
          console.log(connLen);
          fetchFriends(connLen).then((intervalId) => {
            clearInterval(intervalId);
            const FriendListElName = documentX.getElementsByClassName(
              "mn-connection-card__name"
            );
            const data = sendConnectionData(0, FriendListElName.length);
            fetchConnectionMails(data, 0);
            resolve();
          });
          clearInterval(intervalId);
        }
      }, 1000);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

const userConnectionFrame = async () => {
  let iframe = document.createElement("iframe");
  iframe.id = "userConnectionFrame";
  iframe.src = "https://www.linkedin.com/mynetwork/invite-connect/connections/";
  iframe.style =
    "position: fixed; top: 200px; left: 0px; height: 500px; width: 500px; z-index: -9999;";
  document.body.appendChild(iframe);
  try {
    await ready();
  } catch (error) {
    console.error(error);
  } finally {
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 10000);
  }
};

const getIframeInfo = () => {
  const iframeEl = document.getElementById("dibsFrame").contentDocument;
  iframeEl.getElementById("getListBtn").addEventListener("click", () => {
    window.open("https://www.bigshyft.com/");
  });
};

const getSideBanner = () => {
  let iframe = document.createElement("iframe");
  iframe.setAttribute("id", "dibsFrame");
  iframe.setAttribute(
    "style",
    "height: 100%; margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 400px;  z-index: 2148372; background: rgb(242, 242, 242); box-shadow: rgb(0 0 0 / 20%) -4px 0px 30px 15px; display: block; opacity: 1; transition: transform 0.25s ease-in-out 0s, opacity 0.25s ease-in-out 0s; transform: translateX(0%);"
  );
  iframe.srcdoc = HTML_TEMPLATE;
  // iframe.setAttribute("src", chrome.runtime.getURL("/Components/Templates/SideModal/index.html"));
  document.body.appendChild(iframe);
  setTimeout(getIframeInfo, 3000);
};

const startServicesId = setInterval(() => {
  if (document) {
    getSideBanner();
    getUserInfoFrame();
    userConnectionFrame();
    clearInterval(startServicesId);
  }
}, 1000);
