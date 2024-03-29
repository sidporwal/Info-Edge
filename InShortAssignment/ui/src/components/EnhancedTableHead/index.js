import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Box,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import PropTypes from "prop-types";

const headCells = [
  {
    id: "state_name",
    numeric: false,
    disablePadding: false,
    label: "State Name",
  },
  {
    id: "total_positive",
    numeric: true,
    disablePadding: false,
    label: "Total Positive",
  },
  {
    id: "new_positive",
    numeric: true,
    disablePadding: false,
    label: "New Positive",
  },
  {
    id: "total_active",
    numeric: true,
    disablePadding: false,
    label: "Total Active",
  },
  {
    id: "new_active",
    numeric: true,
    disablePadding: false,
    label: "New Active",
  },
  {
    id: "total_cured",
    numeric: true,
    disablePadding: false,
    label: "Total Cured",
  },
  {
    id: "new_cured",
    numeric: true,
    disablePadding: false,
    label: "New Cured",
  },
  {
    id: "total_death",
    numeric: true,
    disablePadding: false,
    label: "Total Death",
  },
  {
    id: "new_death",
    numeric: true,
    disablePadding: false,
    label: "New Death",
  },
];

const EnhancedTableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="right"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default EnhancedTableHead;
