const HTML_TEMPLATE =
  '<html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width"/><title>Popup</title><style> *{margin:0; padding:0; border:0; outline:0; } .RSPBstep{ display:inline-flex; justify-content:center; align-items:center; z-index:0; position:absolute; transform:translateX(-50%); transition-property:all; transition-timing-function:ease; } .RSPBprogression{ position:absolute; transition: width 0.3s ease; left:0; top:0; bottom:0; border-radius:10px; background:rgba(0,116,217,0.8); z-index:-1; height: 10px; } .step-progress-titles-section{ color:#000; display:flex; font-weight:700; margin-top:16px; } .step-progress-title{ flex:1; align-content:center; text-align:center; font-size:10px; } .main-outer{ height:100%; } .screen-decor{ margin-left:16px; margin-right:16px; height:100%; margin-top:8%; } .onboarding-button{ background-color:#55efc4; width:100%; height:48px; margin-top:64px; color:#000; border-radius:8px; font-weight:500; font-size:medium; padding:5px 10px; cursor:pointer; -webkit-transition-duration: 0.4s; transition-duration: 0.4s; } .onboarding-button:hover{ box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);} .small-heading-text{font-size:small;} .indexedStep{ color:#fff; width:32px; height:32px; font-size:16px; background-color:#55efc4; border-radius:50%; display:flex; justify-content:center; align-items:center;} .accomplished{ background-color:#55efc4; } .step-progress-outer{ margin-left:32px; margin-right:32px; margin-top:8px;} .RSPBprogressBar{ height:10px; line-height:1; border-radius:10px; position:relative; background-color:hsla(0,0%,82.7%,0.6); display:flex; justify-content:space-between; align-items:center; z-index:0;}</style></head><body style="background-color:ghostwhite"><div id="popup-root"><section id="popup" class="main-section" style="height:949px"><section><div class="step-progress-outer"><div class="RSPBprogressBar" style="background:rgb(187,252,234); height:10px; margin-top:20px;"><div class="RSPBstep" style="left:0%; transition-duration:300ms; transform: translateX(-50%) scale(1);"><div class="indexedStep accomplished">1</div></div><div class="RSPBstep" style="left:25%; transition-duration:300ms; transform: translateX(-50%) scale(1);"><div class="indexedStep accomplished">2</div></div><div class="RSPBstep"style="left:50%; transition-duration:300ms; transform:translateX(-50%) scale(1);"><div class="indexedStep accomplished">3</div></div><div class="RSPBstep" style="left:75%; transition-duration:300ms; transform: translateX(-50%) scale(1);"><div class="indexedStep accomplished">4</div></div><div class="RSPBstep" style="left:100%; transition-duration:300ms; transform:translateX(-50%)scale(1);"><div class="indexedStep null">5</div></div><div class="RSPBprogression" style="background:linear-gradient(toright,rgb(85,239,196),rgb(85,239,196)); width:75%;"></div></div></div><div><section class="step-progress-titles-section"><h3 class="step-progress-title">Install<br/>Extension</h3><h3 class="step-progress-title">Go to<br/>Linkedin</h3><h3 class="step-progress-title">Sync<br/>contacts</h3><h3 class="step-progress-title">Vouch for<br/>friends</h3><h3 class="step-progress-title">Track<br/></h3></section></div><div class="main-outer"><section class="screen-decor"style="background-position:70%40%"><h3 style="margin-top:20%; font-size:22px; margin-left:16px; font-weight:350;"><span>Hi VIVEK, vouch for engineers from LinkedIn and earn</span></h3><h3 style="font-size:16px; margin-top:32px; margin-left:16px"><span style="color:rgb(255,86,94)">👉 ₹1Lac  </span>for successful hire<br/></h3><h3 style="font-size:16px; margin-top:32px; margin-left:16px"><span style="color:rgb(255,86,94)">👉 ₹1000  </span>per interviewed candidate<br/></h3><h3 style="font-size:16px; margin-top:32px; margin-left:16px"><span style="color:rgb(255,86, 94)">👉 ₹100  </span>for making linkedin connections public<br/></h3><button id="getListBtn" class="onboarding-button" style="margin-top:64px;">Get list of LinkedIn connections to vouch</button><h1 class="small-heading-text" style="margin:16px; text-align:center;">We are 100% secure.</h1></section></div></section></section></div><script type="text/javascript" src="js/popup.bundle.js"></script></body></html>';

const redirectionURL =
  "chrome-extension://dbhcjpmidooenmdflheidlggnjnnmpfj/Components/Templates/Options/index.html";

const getIframeInfo = () => {
  const iframeEl = document.getElementById("dibsFrame").contentDocument;
  iframeEl.getElementById("getListBtn").addEventListener("click", () => {
    window.open(
      "chrome-extension://hbncikilbbemamenepglpnkhocjfaeko/Components/Templates/SideModal/index.html"
    );
  });
};

const getSideBanner = () => {
  var iframe = document.createElement("iframe");
  iframe.setAttribute("id", "dibsFrame");
  iframe.setAttribute(
    "style",
    "height: 100%; margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 400px;  z-index: 2148372; background: rgb(242, 242, 242); box-shadow: rgb(0 0 0 / 20%) -4px 0px 30px 15px; display: block; opacity: 1; transition: transform 0.25s ease-in-out 0s, opacity 0.25s ease-in-out 0s; transform: translateX(0%);"
  );
  iframe.srcdoc = HTML_TEMPLATE;
  document.body.appendChild(iframe);
  setTimeout(getIframeInfo, 3000);
};

setTimeout(getSideBanner, 3000);
