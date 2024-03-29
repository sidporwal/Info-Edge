import get from "../../../utils/get";

export const fetchConnectionsList = ({ premiumJobId }) => {
  return new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      fetch(
        `http://10.120.9.102:5556/linkedIn/connection/fetch?jobId=${premiumJobId}`,
        {
          method: "GET",
          headers: {
            Token: localStorage.getItem("userMail"),
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (get(res, "data.length")) {
            clearInterval(intervalId);
            resolve(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
          clearInterval(intervalId);
          reject(error);
        });
    }, 5000);
  });
};
