const HTML_TEMPLATE =
  '<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Popup</title><style>*{margin:0;padding:0;border:0;outline:0}.RSPBstep{display:inline-flex;justify-content:center;align-items:center;z-index:0;position:absolute;transform:translateX(-50%);transition-property:all;transition-timing-function:ease}.RSPBprogression{position:absolute;transition:width .3s ease;left:0;top:0;bottom:0;border-radius:10px;background:#ffa800;z-index:-1;height:10px}.step-progress-titles-section{color:#fff;display:flex;font-weight:700;margin-top:16px}.step-progress-title{flex:1;align-content:center;text-align:center;font-size:10px}.main-outer{height:100%;text-align:center}.screen-decor{margin-left:16px;margin-right:16px;height:100%;margin-top:8%;color:#fff}.onboarding-button{background-color:#e29706;width:90%;height:48px;margin-top:64px;color:#fff;border-radius:8px;font-weight:500;font-size:medium;padding:5px 10px;cursor:pointer;-webkit-transition-duration:.4s;transition-duration:.4s}.onboarding-button:hover{transform:scale(1.1,1.3)}.small-heading-text{font-size:small}.indexedStep{color:#fff;width:32px;height:32px;font-size:16px;background-color:#0e88ff;border-radius:50%;display:flex;justify-content:center;align-items:center}.accomplished{background-color:#0e88ff}.step-progress-outer{margin-left:32px;margin-right:32px;margin-top:8px}.RSPBprogressBar{height:10px;line-height:1;border-radius:10px;position:relative;background-color:#0e88ff;display:flex;justify-content:space-between;align-items:center;z-index:0}.otpView{margin:3.38rem 1.75rem;color:#fff;font-size:16px}.otpPageTitle{font-size:.81rem;margin-bottom:2.5rem}.otpHeading{font-size:1.06rem;font-weight:700;margin-bottom:1.88rem}.otpInput{outline:0;padding-bottom:.75rem;margin-right:.5rem;width:2.31rem!important;border:none;border-bottom:1px solid #d6dce9;font-family:Manrope,sans-serif;margin-bottom:1.75rem;background-color:#000;color:#fff}.resendOtp__button{color:#0e88ff;font-weight:700;cursor:pointer;background-color:inherit;margin-right:24px}.resendOtp{display:flex}</style></head><body style="background-color:#0f1216"><div id="popup-root"><section id="popup" class="main-section" style="height:949px"><section><div class="step-progress-outer"><div class="RSPBprogressBar" style="background:#0e88ff;height:10px;margin-top:20px"><div class="RSPBstep" style="left:0;transition-duration:300ms;transform:translateX(-50%) scale(1)"><div class="indexedStep accomplished">1</div></div><div class="RSPBstep" style="left:25%;transition-duration:300ms;transform:translateX(-50%) scale(1)"><div class="indexedStep accomplished">2</div></div><div class="RSPBstep" style="left:50%;transition-duration:300ms;transform:translateX(-50%) scale(1)"><div class="indexedStep accomplished">3</div></div><div class="RSPBstep" style="left:75%;transition-duration:300ms;transform:translateX(-50%) scale(1)"><div class="indexedStep accomplished">4</div></div><div class="RSPBstep" style="left:100%;transition-duration:300ms;transform:translateX(-50%) scale(1)"><div class="indexedStep null">5</div></div><div class="RSPBprogression" style="background:linear-gradient(toright,#55efc4,#55efc4);width:0"></div></div></div><div><section class="step-progress-titles-section"><h3 class="step-progress-title">Install<br>Extension</h3><h3 class="step-progress-title">Checking<br>Log In</h3><h3 class="step-progress-title">Sync<br>contacts</h3><h3 class="step-progress-title">Vouch for<br>friends</h3><h3 class="step-progress-title">Track<br></h3></section></div><div class="otpView"><div class="otpPageTitle"><p>OTP (One Time Password) has been sent to your email</p></div><p class="otpHeading">Confirm OTP</p><div style="display:flex"><div style="display:flex;align-items:center"><input placeholder="0" type="tel" class="otpInput" maxlength="1" style="width:1em;text-align:center"></div><div style="display:flex;align-items:center"><input placeholder="0" type="tel" class="otpInput" maxlength="1" style="width:1em;text-align:center"></div><div style="display:flex;align-items:center"><input placeholder="0" type="tel" class="otpInput" maxlength="1" style="width:1em;text-align:center"></div><div style="display:flex;align-items:center"><input placeholder="0" type="tel" class="otpInput" maxlength="1" style="width:1em;text-align:center"></div></div><div class="resendOtp"><button class="resendOtp__button" id="resendOTP" type="button">Resend OTP</button> <button class="resendOtp__button" id="submitOTP" type="button">Submit OTP</button></div></div><div class="main-outer"><section class="screen-decor" style="background-position:70%40%"><h3 style="margin-top:20%;font-size:22px;margin-left:16px;font-weight:350"><span>Vouch for engineers from LinkedIn and earn</span></h3><h3 style="font-size:16px;margin-top:32px;margin-left:16px"><span style="color:#ff565e">👉 ₹10000</span> for successful hire<br></h3><h3 style="font-size:16px;margin-top:32px;margin-left:16px"><span style="color:#ff565e">👉 ₹1000</span> per interviewed candidate<br></h3><h3 style="font-size:16px;margin-top:32px;margin-left:16px"><span style="color:#ff565e">👉 ₹100</span> for making connections public<br></h3><button id="getListBtn" class="onboarding-button" style="margin-top:64px;opacity:.5;cursor:not-allowed">Fetching Your LinkedIn Data</button><h1 class="small-heading-text" style="margin:16px;text-align:center">We are 100% secure.</h1></section></div></section></section></div></body></html>';

const sendDataUsingAPIs = ({ from, subject, data }) => {
  chrome.runtime.sendMessage({ from, subject, data });
};

const showProgress = ({ base, completed }) => {
  const documentX = document.getElementById("dibsFrame").contentDocument;
  documentX.getElementsByClassName("RSPBprogression")[0].style = `width: ${
    base + completed / 4
  }%;`;
};

const fetchUserContactInfo = (iframeId) => {
  return new Promise((resolve, reject) => {
    try {
      let intervalId = setInterval(() => {
        const documentX = document.getElementById(iframeId).contentDocument;
        if (
          documentX.getElementsByClassName(
            "pv-contact-info__contact-type ci-vanity-url"
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
          fetchUserContactInfo(iframeId)
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              console.error();
              reject(error);
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
              goToProfilePage("userInfoFrame")
                .then((data) => {
                  resolve(data);
                })
                .catch((error) => {
                  console.error(error);
                  reject(error);
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
    const data = await fetchUserInfo();
    // API Post Current Use
    sendDataUsingAPIs({ from: "content", subject: "userInfo", data });
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
      fetchUserContactInfo(profileUrl)
        .then((values) => {
          const data = values;
          setTimeout(() => {
            document.body.removeChild(iframe);
            resolve(data);
          }, 5000);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  });
};

let connectionsMail = [];
const fetchConnectionMails = async (data, i) => {
  showProgress({ base: 50, completed: (i / data.length) * 100 });
  try {
    if (i === data.length) {
      console.log(connectionsMail);
      sendDataUsingAPIs({
        from: "content",
        subject: "connectionsMailInfo",
        data: connectionsMail,
      });
      return;
    }
    if (i % 10 === 0 && i != 0) {
      console.log(connectionsMail);
      sendDataUsingAPIs({
        from: "content",
        subject: "connectionsMailInfo",
        data: connectionsMail,
      });
      connectionsMail = [];
    }
    const contactData = await fetchConnectionMail(data[i].profileUrl);
    connectionsMail.push(contactData);
    console.log(connectionsMail);
    fetchConnectionMails(data, i + 1);
  } catch (error) {
    console.error(error);
  }
};

const sendConnectionData = (prev, curr, isApiCall = true) => {
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
  if (isApiCall) {
    sendDataUsingAPIs({ from: "content", subject: "connectionsInfo", data });
  }
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
        showProgress({ base: 25, completed: (currLen / connLen) * 100 });
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
            const data = sendConnectionData(0, FriendListElName.length, false);
            const documentXY =
              document.getElementById("dibsFrame").contentDocument;
            documentXY.getElementsByClassName("RSPBprogression")[0].style =
              "width: 75%";
            getBtnState(true);
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

const getBtnState = (state) => {
  const intervalId = setInterval(() => {
    const documentX = document.getElementById("dibsFrame").contentDocument;
    if (documentX.getElementById("getListBtn")) {
      if (state) {
        documentX.getElementById("getListBtn").disabled = false;
        documentX.getElementById("getListBtn").innerText =
          "Get list of LinkedIn connections to vouch";
        documentX.getElementById("getListBtn").addEventListener("click", () => {
          window.open("https://www.bigshyft.com/");
        });
        documentX.getElementById("getListBtn").style =
          "opacity: 1; cursor: pointer;";
        documentX.getElementsByClassName("RSPBprogression")[0].style =
          "width: 50%";
      } else {
        documentX.getElementById("getListBtn").disabled = true;
        documentX.getElementsByClassName("RSPBprogression")[0].style =
          "width: 25%";
      }
      clearInterval(intervalId);
    }
  }, 1000);
};

const getSideBanner = () => {
  let iframe = document.createElement("iframe");
  iframe.setAttribute("id", "dibsFrame");
  iframe.setAttribute(
    "style",
    "height: 100%; margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 400px;  z-index: 2148372; background: rgb(242, 242, 242); box-shadow: rgb(0 0 0 / 20%) -4px 0px 30px 15px; display: block; opacity: 1; transition: transform 0.25s ease-in-out 0s, opacity 0.25s ease-in-out 0s; transform: translateX(0%);"
  );
  iframe.srcdoc = HTML_TEMPLATE;
  document.body.appendChild(iframe);
  setTimeout(getBtnState, 3000);
};

const startServicesId = setInterval(() => {
  if (document) {
    getSideBanner();
    getUserInfoFrame().then(() => {
      // userConnectionFrame();
    });
    clearInterval(startServicesId);
  }
}, 1000);
