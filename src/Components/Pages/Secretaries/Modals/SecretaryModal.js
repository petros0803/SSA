import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { TextField, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import StyledModal from "./StyledModal";
import CLOSE from "../../../../Assets/Icons/x.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Error from "../../../../Assets/Icons/error.png";
import { APIVariables } from "../../../../Shared/api";
import axios from "axios";
import { nameRegex } from "../../../../helpers";

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "First name must be at least 3 characters long")
    .max(30, "Exceded the maximum number of characters")
    .matches(nameRegex, "First name must contain only letters and dashes")
    .required("This field is mandatory"),
  lastName: Yup.string()
    .min(3, "Last name must be at least 3 characters long")
    .max(30, "Exceded the maximum number of characters")
    .matches(
      nameRegex,
      "Last name must contain only letters, dashes and apostrophes"
    )
    .required("This field is mandatory"),
  address: Yup.string()
    .min(3, "First name must be at least 3 characters long")
    .max(50, "Exceded the maximum number of characters")
    .required("This field is mandatory"),
});

const SecretaryModal = ({
  open,
  handleClose,
  modalState,
  secretary,
  loadLazyData,
}) => {
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

  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    setInitialValues({
      firstName: secretary?.firstName ?? "",
      lastName: secretary?.lastName ?? "",
      address: secretary?.address ?? "",
    });
  }, [secretary]);

  const addSecretary = async (values) => {
    await axios
      .post(APIVariables.SECRETARIES, {
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          loadLazyData();
          handleClose();
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const updateSecretary = async (values) => {
    await axios
      .put(`${APIVariables.SECRETARIES}/${secretary.id}`, {
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          loadLazyData();
          handleClose();
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const onSubmit = (values) => {
    if (modalState === "add") {
      addSecretary(values);
    } else if (modalState === "edit") {
      updateSecretary(values);
    }
    console.log("submited", values);
    handleClose();
  };

  const deleteSecretary = () => {
    axios
      .delete(APIVariables.SECRETARIES + "/" + secretary.id)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);

          loadLazyData();
          handleClose();
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

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
          <div className="modal--close--icon">
            <img
              src={CLOSE}
              alt="Close"
              title="Close"
              onClick={() => handleClose()}
            />
          </div>

          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            className="center mb1 rhino"
          >
            {modalState === "view"
              ? `View Secretary`
              : modalState === "edit"
              ? "Edit secretary"
              : modalState === "delete"
              ? "Delete secretary"
              : modalState === "add" && "Add secretary"}
          </Typography>
          <StyledModal>
            {modalState === "delete" ? (
              <>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  className="center mb1 rhino"
                >
                  Are you sure you want to delete secretary{" "}
                  <span className="delete--secretary--name">{`${initialValues.firstName} ${initialValues.lastName}`}</span>
                </Typography>
                <Button
                  variant="outlined"
                  className="btn m0"
                  color="error"
                  onClick={() => deleteSecretary()}
                >
                  Delete
                </Button>
              </>
            ) : (
              initialValues && (
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={ValidationSchema}
                  enableReinitialize
                >
                  {({ setFieldValue, errors, touched, values }) => {
                    return (
                      <Form>
                        <div>
                          <TextField
                            error={!!errors.firstName && !!touched.firstName}
                            disabled={modalState === "view" ? true : false}
                            name="firstName"
                            id="outlined-basic"
                            label="First name"
                            variant="outlined"
                            value={values.firstName}
                            onChange={(e) =>
                              setFieldValue("firstName", e.target.value)
                            }
                          />
                          {!!errors.firstName && !!touched.firstName && (
                            <Tooltip
                              title={errors.firstName}
                              placement="bottom"
                            >
                              <img src={Error} alt="action" />
                            </Tooltip>
                          )}
                        </div>
                        <div>
                          <TextField
                            error={!!errors.lastName && !!touched.lastName}
                            disabled={modalState === "view" ? true : false}
                            name="lastName"
                            id="outlined-basic"
                            label="Last name"
                            variant="outlined"
                            value={values.lastName}
                            onChange={(e) =>
                              setFieldValue("lastName", e.target.value)
                            }
                          />
                          {!!errors.lastName && !!touched.lastName && (
                            <Tooltip title={errors.lastName} placement="bottom">
                              <img src={Error} alt="action" />
                            </Tooltip>
                          )}
                        </div>
                        <div>
                          <TextField
                            error={!!errors.address && !!touched.address}
                            disabled={modalState === "view" ? true : false}
                            name="address"
                            id="outlined-basic"
                            label="Address"
                            variant="outlined"
                            value={values.address}
                            onChange={(e) =>
                              setFieldValue("address", e.target.value)
                            }
                          />
                          {!!errors.address && !!touched.address && (
                            <Tooltip title={errors.address} placement="bottom">
                              <img src={Error} alt="action" />
                            </Tooltip>
                          )}
                        </div>

                        <Button
                          variant="outlined"
                          className="btn btn--blue m0"
                          type="submit"
                        >
                          {modalState === "view"
                            ? "Close"
                            : modalState === "edit"
                            ? "Edit"
                            : "Add"}
                        </Button>
                      </Form>
                    );
                  }}
                </Formik>
              )
            )}
          </StyledModal>
        </Box>
      </Fade>
    </Modal>
  );
};

export default SecretaryModal;
