import React, { useEffect, useState } from "react";
import StyledStudents from "./StyledStudents";
import axios from "axios";
import { APIVariables } from "../../../Shared/API.CALLS";
import Table from "../../Common/Table/Table";
import StudentModal from "./Modals/StudentModal";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [data, setData] = useState([]);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [modalState, setModalState] = useState();
  const [itemToEdit, setItemToEdit] = useState();

  const handleClose = () => {
    setIsStudentModalOpen(false);
    setTimeout(() => {
      setModalState();
      setItemToEdit();
    }, 500);
  };

  useEffect(() => {
    getStudentsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStudentsData = async () => {
    const response = await axios.get(APIVariables.STUDENTS);

    if (response.status === 200) {
      setStudents(response.data);
      setTableData();
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

  console.log(modalState);

  return (
    <StyledStudents>
      <Table
        colData={data}
        data={students}
        setModalState={setModalState}
        openModal={setIsStudentModalOpen}
        setItemToEdit={setItemToEdit}
      />
      <StudentModal
        open={isStudentModalOpen}
        handleClose={handleClose}
        modalState={modalState}
        student={students[itemToEdit]}
      />
    </StyledStudents>
  );
};

export default Students;
