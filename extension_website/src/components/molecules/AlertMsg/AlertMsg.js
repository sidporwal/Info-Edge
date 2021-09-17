import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import "./AlertMsg.css";

const AlertMsg = ({ Text = "", success = false, isVisible = false }) => {
  return (
    isVisible && (
      <div className="alertMsg">
        <Stack sx={{ width: "100%" }} spacing={2}>
          {success ? (
            <Alert severity="success">Success.</Alert>
          ) : (
            <Alert severity="error">Error.</Alert>
          )}
        </Stack>
      </div>
    )
  );
};

export default AlertMsg;
