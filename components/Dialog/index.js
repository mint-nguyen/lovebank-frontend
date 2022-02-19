import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export default (props) => {
  const { onClose, open, content } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "#FFE5EC",
          padding: 10,
          color: "#FB6F92",
        },
      }}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle>{content}</DialogTitle>
    </Dialog>
  );
};
