import React, { useEffect, useState } from "react";
import StyledStudents from "./StyledStudents";
import axios from "axios";
import { APIVariables } from "../../../Shared/api";
import Table from "../../Common/Table/Table";
import StudentModal from "./Modals/StudentModal";
import { Pagination, Skeleton, TextField } from "@mui/material";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [data, setData] = useState([]);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [modalState, setModalState] = useState();
  const [itemToEdit, setItemToEdit] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState();

  const handleClose = () => {
    setIsStudentModalOpen(false);
    setTimeout(() => {
      setModalState();
      setItemToEdit();
    }, 100);
  };

  useEffect(() => {
    getStudentsData();
    getSpecializationsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStudentsData = async () => {
    setIsLoading(true);
    const response = await axios.get(APIVariables.STUDENTS);

    if (response.status === 200) {
      setStudents(response.data);
      setTableData();
      setIsLoading(false);
    }
  };

  const loadLazyData = () => {
    getStudentsData();
  };

  const getSpecializationsData = async () => {
    const response = await axios.get(APIVariables.SPECIALIZATIONS);

    if (response.status === 200) {
      setSpecializations(response.data);
    }
  };

  const setTableData = () => {
    setData([
      "id",
      "code",
      "firstName",
      "lastName",
      "specialization",
      "year",
      "class",
      "email",
    ]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StyledStudents>
      <div className="page--title--add mb1 mt1">
        <div className="page--title-text">Students</div>
        <div>
          <button
            className="btn-add"
            onClick={() => {
              setIsStudentModalOpen(true);
              setModalState("add");
            }}
            title="Add student"
          >
            Add Student
          </button>
        </div>
      </div>

      <div>
        <TextField
          name="search"
          size="small"
          id="outlined-basic"
          label="Search student"
          variant="outlined"
          value={search ?? ""}
          onChange={(event) => handleSearch(event)}
        />
      </div>
      {isLoading ? (
        <Skeleton variant="rectangular" animation="wave" />
      ) : (
        <Table
          colData={data}
          data={students}
          specializations={specializations}
          setModalState={setModalState}
          openModal={setIsStudentModalOpen}
          setItemToEdit={setItemToEdit}
          isLoading={isLoading}
        />
      )}
      <Pagination count={10} variant="outlined" />
      <StudentModal
        open={isStudentModalOpen}
        handleClose={handleClose}
        modalState={modalState}
        student={
          !isNaN(itemToEdit)
            ? students.find((student) => student.id === itemToEdit)
            : undefined
        }
        specializations={specializations}
        loadLazyData={loadLazyData}
      />
    </StyledStudents>
  );
};

export default Students;
