import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import StyledModal from "./StyledModal";

const StudentModal = ({ open, handleClose, modalState, student }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  console.log("student :>> ", student);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            className="center mb1 rhino"
          >
            {modalState === "view"
              ? // <div>
                //   <span>View</span>
                //   <br />
                //   <span>
                //     {student?.firstName} {student?.lastName}
                //   </span>
                // </div>
                `View Student`
              : modalState === "edit" && "Edit student"}
          </Typography>
          <StyledModal>
            <TextField
              disabled={modalState === "view" ? true : false}
              name="firstName"
              id="outlined-basic"
              label="First name"
              variant="outlined"
              value={student?.firstName ?? ""}
            />
            <TextField
              disabled={modalState === "view" ? true : false}
              name="lastName"
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              value={student?.lastName ?? ""}
            />
            <TextField
              disabled={modalState === "view" ? true : false}
              name="year"
              id="outlined-basic"
              label="Year"
              variant="outlined"
              value={student?.year ?? ""}
            />
            <TextField
              disabled={modalState === "view" ? true : false}
              name="specialization"
              id="outlined-basic"
              label="Specialization"
              variant="outlined"
              value={student?.specialization ?? ""}
            />
            <TextField
              disabled={modalState === "view" ? true : false}
              name="class"
              id="outlined-basic"
              label="Class"
              variant="outlined"
              value={student?.class ?? ""}
            />
            <TextField
              disabled={modalState === "view" ? true : false}
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={student?.email ?? ""}
            />
            <TextField
              disabled={modalState === "view" ? true : false}
              name="code"
              id="outlined-basic"
              label="Code"
              variant="outlined"
              value={student?.code ?? ""}
            />
            <Button variant="outlined" onClick={() => handleClose()}>
              {modalState === "view" ? "Close" : "Edit"}
            </Button>
          </StyledModal>
        </Box>
      </Fade>
    </Modal>
  );
};

export default StudentModal;
