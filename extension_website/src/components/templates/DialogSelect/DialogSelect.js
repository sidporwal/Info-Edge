import React from "react";
// uimport PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./DialogSelect.css";

const DialogSelect = ({ JDDetails, handleSelect }) => {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(Number(event.target.value) || "");
    handleSelect(Number(event.target.value) || 0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div className="selectText">
      <Button onClick={handleClickOpen}>Select Job Mandate</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select Job Mandate</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, width: 800 }}>
              <InputLabel htmlFor="demo-dialog-native">Choose Job</InputLabel>
              <Select
                native
                value={age}
                onChange={handleChange}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              >
                {
                  // eslint-disable-next-line array-callback-return
                  JDDetails.map((job, index) => (
                    <option value={index} key={`Job_Option_${index + 1}`}>
                      {job.companyName} - {job.jobRole}
                    </option>
                  ))
                }
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DialogSelect.propTypes = {};

DialogSelect.defaultProps = {};

export default DialogSelect;
