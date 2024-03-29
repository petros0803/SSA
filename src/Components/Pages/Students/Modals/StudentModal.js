import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import Button from "@mui/material/Button";
import StyledModal from "./StyledModal";
import CLOSE from "../../../../Assets/Icons/x.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Error from "../../../../Assets/Icons/error.png";
import { APIVariables } from "../../../../Shared/api";
import axios from "axios";
import { nameRegex } from "../../../../helpers";
import {
  notifyError,
  notifySuccess,
} from "../../../Common/ToastNotification/ToastNotification";

const StudentModal = ({
  open,
  handleClose,
  modalState,
  student,
  specializations,
  loadLazyData,
  translate
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

  const ValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, translate("firstName_validation_min"))
      .max(30, translate("validation_max"))
      .matches(nameRegex, translate("firstName_validation_matches"))
      .required(translate("validation_required")),
    lastName: Yup.string()
      .min(3, translate("lastName_validation_min"))
      .max(30, translate("validation_max"))
      .matches(
        nameRegex,
        translate("lastName_validation_matches")
      )
      .required(translate("validation_required")),
    year: Yup.string().required(translate("validation_required")),
    specialization: Yup.string().required(translate("validation_required")),
    class: Yup.string().required(translate("validation_required")),
    email: Yup.string()
      .email(translate("email_validation_invalid"))
      .required(translate("validation_required")),
    code: Yup.string().required(translate("validation_required")),
  });

  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    setInitialValues({
      firstName: student?.firstName ?? "",
      lastName: student?.lastName ?? "",
      year: student?.year ?? "",
      specialization: student?.specialization ?? "",
      class: student?.class ?? "",
      email: student?.email ?? "",
      code: student?.code ?? "",
    });
  }, [student]);

  const addStudent = async (values) => {
    await axios
      .post(APIVariables.STUDENTS, {
        firstName: values.firstName,
        lastName: values.lastName,
        year: values.year,
        specialization: values.specialization,
        class: values.class,
        email: values.email,
        code: values.code,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          notifySuccess(translate('student_successfully_added'));
          loadLazyData();
          handleClose();
        } else {
          notifyError(translate('student_unsuccessfully_added'));
        }
      })
      .catch((error) => {
        console.log("error", error);
        notifyError(translate('student_unsuccessfully_added'));
      });
  };
  const updateStudent = async (values) => {
    await axios
      .put(`${APIVariables.STUDENTS}/${student.id}`, {
        firstName: values.firstName,
        lastName: values.lastName,
        year: values.year,
        specialization: values.specialization,
        class: values.class,
        email: values.email,
        code: values.code,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          notifySuccess(translate('student_successfully_updated'));
          loadLazyData();
          handleClose();
        } else {
          notifyError(translate("student_unsuccessfully_updated"));
        }
      })
      .catch((error) => {
        console.log("error", error);
        notifyError(translate("student_unsuccessfully_updated"));
      });
  };

  const onSubmit = (values) => {
    if (modalState === "add") {
      addStudent(values);
    } else if (modalState === "edit") {
      updateStudent(values);
    }
    console.log("submited", values);
    handleClose();
  };

  const deleteStudent = () => {
    axios
      .delete(APIVariables.STUDENTS + "/" + student.id)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          notifySuccess(translate('student_successfully_deleted'));
          loadLazyData();
          handleClose();
        } else {
          notifyError(translate('student_unsuccessfully_deleted'));
        }
      })
      .catch((error) => {
        console.log("error", error);
        notifyError(translate('student_unsuccessfully_deleted'));
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
              title={translate("close")}
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
              ? translate("view_student")
              : modalState === "edit"
                ? translate("edit_student")
                : modalState === "delete"
                  ? translate("delete_student")
                  : modalState === "add" && translate("add_student")}
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
                  {translate("delete_student_description")}{" "}
                  <span className="delete--student--name">{`${initialValues.firstName} ${initialValues.lastName}`}</span>?
                </Typography>
                <Button
                  variant="outlined"
                  className="btn m0"
                  color="error"
                  onClick={() => deleteStudent()}
                >
                  {translate("delete")}
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
                            label={translate("firstName")}
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
                            label={translate("lastName")}
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
                        <FormControl
                          disabled={modalState === "view" ? true : false}
                        >
                          <div>
                            <InputLabel
                              id={
                                modalState === "view"
                                  ? "demo-simple-select-label-disabled"
                                  : "demo-simple-select-label"
                              }
                            >
                              {translate("year")}

                            </InputLabel>
                            <Select
                              error={!!errors.year && !!touched.year}
                              labelId="demo-simple-select-label"
                              name="year"
                              id={
                                modalState === "view"
                                  ? "demo-simple-select-disabled"
                                  : "demo-simple-select"
                              }
                              value={values.year}
                              label={translate("year")}
                              onChange={(e) =>
                                setFieldValue("year", e.target.value)
                              }
                            >
                              <MenuItem value={1}>{translate("first")}</MenuItem>
                              <MenuItem value={2}>{translate("second")}</MenuItem>
                              <MenuItem value={3}>{translate("third")}</MenuItem>
                              <MenuItem value={4}>{translate("fourth")}</MenuItem>
                            </Select>
                            {!!errors.year && !!touched.year && (
                              <Tooltip title={errors.year} placement="bottom">
                                <img
                                  src={Error}
                                  className="select-error-img"
                                  alt="action"
                                />
                              </Tooltip>
                            )}
                          </div>
                        </FormControl>

                        <FormControl
                          disabled={modalState === "view" ? true : false}
                        >
                          <div>
                            <InputLabel
                              id={
                                modalState === "view"
                                  ? "demo-simple-select-label-disabled"
                                  : "demo-simple-select-label"
                              }
                            >
                              {translate("specialization")}
                            </InputLabel>
                            <Select
                              error={
                                !!errors.specialization &&
                                !!touched.specialization
                              }
                              labelId="demo-simple-select-label"
                              name="specialization"
                              id={
                                modalState === "view"
                                  ? "demo-simple-select-disabled"
                                  : "demo-simple-select"
                              }
                              value={values.specialization}
                              label={translate("specialization")}
                              onChange={(e) =>
                                setFieldValue("specialization", e.target.value)
                              }
                            >
                              {specializations.map((specialization) => (
                                <MenuItem
                                  value={specialization.id}
                                  key={specialization.id}
                                >
                                  {specialization.name}
                                </MenuItem>
                              ))}
                            </Select>
                            {!!errors.specialization &&
                              !!touched.specialization && (
                                <Tooltip
                                  title={errors.specialization}
                                  placement="bottom"
                                >
                                  <img
                                    src={Error}
                                    className="select-error-img"
                                    alt="action"
                                  />
                                </Tooltip>
                              )}
                          </div>
                        </FormControl>
                        <div>
                          <TextField
                            error={!!errors.class && !!touched.class}
                            disabled={modalState === "view" ? true : false}
                            name="class"
                            id="outlined-basic"
                            label={translate("class")}
                            variant="outlined"
                            value={values.class}
                            onChange={(e) =>
                              setFieldValue("class", e.target.value)
                            }
                          />
                          {!!errors.class && !!touched.class && (
                            <Tooltip title={errors.class} placement="bottom">
                              <img src={Error} alt="action" />
                            </Tooltip>
                          )}
                        </div>
                        <div>
                          <TextField
                            error={!!errors.email && !!touched.email}
                            disabled={modalState === "view" ? true : false}
                            name="email"
                            id="outlined-basic"
                            label={translate("email")}
                            variant="outlined"
                            value={values.email}
                            onChange={(e) =>
                              setFieldValue("email", e.target.value)
                            }
                          />
                          {!!errors.email && !!touched.email && (
                            <Tooltip title={errors.email} placement="bottom">
                              <img src={Error} alt="action" />
                            </Tooltip>
                          )}
                        </div>
                        <div>
                          <TextField
                            error={!!errors.code && !!touched.code}
                            disabled={modalState === "view" ? true : false}
                            name="code"
                            id="outlined-basic"
                            label={translate("code")}
                            variant="outlined"
                            value={values.code}
                            onChange={(e) =>
                              setFieldValue("code", e.target.value)
                            }
                          />
                          {!!errors.code && !!touched.code && (
                            <Tooltip title={errors.code} placement="bottom">
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
                            ? translate("close")
                            : modalState === "edit"
                              ? translate("edit")
                              : translate("add")}
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

export default StudentModal;
