export const fetchReferralStatus = () => {
  return fetch("http://10.120.9.102:5556/referral/status", {
    method: "GET",
    headers: { token: localStorage.getItem("userMail") },
  }).then((res) => res.json());
};
