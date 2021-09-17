export const fetchConnectionsList = () => {
  return new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      fetch("http://10.120.9.102:8081/linkedIn/connection/fetch", {
        method: "GET",
        headers: {
          Token: localStorage.getItem("userMail"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data.length) {
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


