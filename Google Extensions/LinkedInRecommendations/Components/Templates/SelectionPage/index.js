var Usrdata = document.querySelector(".box");
var userDetail = [1, 2, 3, 4, 5, 6, 7, 8];
document.getElementById("cardsWrapper").innerHTML = userDetail
  .map(
    (user) =>
      `
  <div class="userCard">
    <div style="background: rgb(129, 216, 247)" class="colorStrip"></div>
    <img
      src="https://media-exp1.licdn.com/dms/image/C4E03AQGXo2_J4sRx9Q/profile-displayphoto-shrink_200_200/0/1599241143117?e=1637193600&v=beta&t=h1UAFxPG_cFhMHs-aHPqIg2LOKptPko9WMa08a0ExXo"
      height="44"
      width="44"
      alt="user"
    />
    <p class="userName">Shubham Chauhan</p>
    <ul class="infoCntr">
      <li class="infoData">Business Technology Solution Associate @ ZS</li>
      <li class="infoData">
        <span class="tag">Profile Link : </span>
        linkedin.com/in/shubham-chauhan-324030157
      </li>
      <li class="infoData">
        <span class="tag">Email : </span>shubhamchauhan0304@gmail.com
      </li>
    </ul>
    <a href="" target="_blank" class="button" rel="noreferrer">
      Vouch Connection
    </a>
  </div>
  `
  )
  .join("");
