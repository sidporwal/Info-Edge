import axios from "axios";

export const fetchCovidData = async () => {
  const url = "http://localhost:8080/api/covidData";
  try {
    const res = await axios.get(url);
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

export const parseData = (data) => {
  let parseData = { rowData: [], totalData: null };
  for (let i = 0; i < 36; i++) {
    parseData.rowData = [
      ...parseData.rowData,
      {
        state_name: data[i].state_name,
        total_positive: Number(data[i].new_positive),
        new_positive: Number(data[i].new_positive) - Number(data[i].positive),
        total_active: Number(data[i].new_active),
        new_active: Number(data[i].new_active) - Number(data[i].active),
        total_cured: Number(data[i].new_cured),
        new_cured: Number(data[i].new_cured) - Number(data[i].cured),
        total_death: Number(data[i].new_death),
        new_death: Number(data[i].new_death) - Number(data[i].death),
      },
    ];
  }
  parseData.totalData = {
    total_positive: Number(data[36].new_positive),
    new_positive: Number(data[36].new_positive) - Number(data[36].positive),
    total_active: Number(data[36].new_active),
    new_active: Number(data[36].new_active) - Number(data[36].active),
    total_cured: Number(data[36].new_cured),
    new_cured: Number(data[36].new_cured) - Number(data[36].cured),
    total_death: Number(data[36].new_death),
    new_death: Number(data[36].new_death) - Number(data[36].death),
  };
  return parseData;
};
