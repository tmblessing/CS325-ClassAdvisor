import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const useStyle = makeStyles(theme => ({
  tags: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    marginTop: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyle();

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          CS 325: Introduction to human computer interaction
        </DialogTitle>
        <DialogContent dividers>
          <Typography component="p">
            In this course we will examine the important problems in usability,
            Human Computer Interaction, User Interfaces, and Human Centered
            Computing. We will examine elements of HCI history, human
            information processing capabilities, HCI design, user interface
            prototyping, methods and new applications and directions in Human
            Computer Interaction.
          </Typography>
          <Box className={classes.tags}>
            <Chip size="small" label="Project Based" />
            <Chip size="small" label="Readings" />
            <Chip size="small" label="Pop Quiz" />
            <Chip size="small" label="Teams" />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
