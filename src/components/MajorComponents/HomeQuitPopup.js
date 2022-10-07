import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const HomeQuitPopup = ({ openDialog, onAgree, closeDialog }) => {
  return (
    <>
      <Dialog open={openDialog} TransitionComponent={Transition}>
        <DialogContent>
          <Typography>Are you sure you want to quit?</Typography>
        </DialogContent>
        <DialogActions style={{ justifyContent: "space-around" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={onAgree}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={closeDialog}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HomeQuitPopup;
