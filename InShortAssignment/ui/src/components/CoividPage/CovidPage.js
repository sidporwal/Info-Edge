import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EnhancedTableHead from "../EnhancedTableHead";
import { fetchCovidData, getComparator, stableSort, parseData } from "./utils";
import "./CovidPage.css";

let intervalId;

const CovidPage = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("state_name");
  const [rows, setNewRows] = useState([]);
  const [totalData, setTotalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const polling = () => {
    intervalId = setInterval(() => {
      fetchCovidData().then((data) => {
        if (data) {
          const { rowData, totalData } = parseData(data);
          setNewRows(rowData);
          setTotalData(totalData);
        }
      });
    }, 30000);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCovidData()
      .then((data) => {
        if (data) {
          const { rowData, totalData } = parseData(data);
          setNewRows(rowData);
          setTotalData(totalData);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
    polling();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <div className="cnt">
      {isLoading && (
        <p className="loading">
          We are fetching the data. Than you for your patience.
        </p>
      )}
      {!isLoading && (
        <>
          <div className="head">
            <div className="title positive">
              <p className="titleText">Total Positive Cases</p>
              <p className="content">
                <span className="totalCases">{totalData?.total_positive}</span>
                <span className="newCases">
                  ({totalData?.new_positive}){" "}
                  <ArrowUpwardIcon fontSize="small" />
                </span>
              </p>
            </div>
            <div className="title active">
              <p className="titleText">Total Active</p>
              <p className="content">
                <span className="totalCases">{totalData?.total_active}</span>
                <span className="newCases">
                  ({totalData?.new_active}) <ArrowUpwardIcon fontSize="small" />
                </span>
              </p>
            </div>
            <div className="title cured">
              <p className="titleText">Total Cured</p>
              <p className="content">
                <span className="totalCases">{totalData?.total_cured}</span>
                <span className="newCases">
                  ({totalData?.new_cured}) <ArrowUpwardIcon fontSize="small" />
                </span>
              </p>
            </div>
            <div className="title death">
              <p className="titleText">Total Deaths</p>
              <p className="content">
                <span className="totalCases">{totalData?.total_death}</span>
                <span className="newCases">
                  ({totalData?.new_death}) <ArrowUpwardIcon fontSize="small" />
                </span>
              </p>
            </div>
          </div>
          <div className="tableCnt">
            <TableContainer>
              <Table>
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy)).map(
                    (row, index) => {
                      return (
                        <TableRow key={row.state_name}>
                          <TableCell align="right">{row.state_name}</TableCell>
                          <TableCell align="right">
                            {row.total_positive}
                          </TableCell>
                          <TableCell align="right">
                            {row.new_positive}
                          </TableCell>
                          <TableCell align="right">
                            {row.total_active}
                          </TableCell>
                          <TableCell align="right">{row.new_active}</TableCell>
                          <TableCell align="right">{row.total_cured}</TableCell>
                          <TableCell align="right">{row.new_cured}</TableCell>
                          <TableCell align="right">{row.total_death}</TableCell>
                          <TableCell align="right">{row.new_death}</TableCell>
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default CovidPage;
