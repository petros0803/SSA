import React, { useEffect, useState } from "react";
import StyledStudents from "./StyledStudents";
import axios from "axios";
import { APIVariables } from "../../../Shared/api";
import Table from "../../Common/Table/Table";
import StudentModal from "./Modals/StudentModal";
import { FormControl, InputLabel, MenuItem, Pagination, Select, Skeleton, TextField } from "@mui/material";
import { withTranslate } from 'react-redux-multilingual'
import { connect } from "react-redux";
import FilterIcon from "../../../Assets/Icons/filter.png"

const Students = ({ ...props }) => {
  const [students, setStudents] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [data, setData] = useState([]);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [modalState, setModalState] = useState();
  const [itemToEdit, setItemToEdit] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState();
  const [activeFilter, setActiveFilter] = useState("")

  const handleActiveFilterChange = (filter) => {
    if (filter === -1) {
      setActiveFilter("");
    } else setActiveFilter(filter);
  }

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
        <div className="page--title-text">{props.translate("students")}</div>
        <div>
          <button
            className="btn-add"
            onClick={() => {
              setIsStudentModalOpen(true);
              setModalState("add");
            }}
            title={props.translate("add_student")}
          >
            {props.translate("add_student")}
          </button>
        </div>
      </div>

      <div className="search--filters--div">
        <TextField
          name="search"
          size="small"
          id="outlined-basic"
          label={props.translate("search_student")}
          variant="outlined"
          value={search ?? ""}
          onChange={(event) => handleSearch(event)}
        />

        <div className="button--div">
          <img src={FilterIcon} alt={props.translate("filter")} />
          <FormControl>
            <div>
              <InputLabel
                id="demo-simple-select-label"
              >
                {props.translate("filter")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="filter"
                id="demo-simple-select"
                label={props.translate("filter")}
                value={activeFilter}
                onChange={(e) =>
                  handleActiveFilterChange(e.target.value)
                }
                size="small"
              >
                <MenuItem value={-1}> {props.translate("remove_filter")} </MenuItem>
                {specializations?.map((spec, index) => <MenuItem value={spec.id} key={index}> {spec.name} </MenuItem>)}

              </Select>
            </div>
          </FormControl>
        </div>
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
        translate={props.translate}
      />
    </StyledStudents>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.reducer,
    ...state.translate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default withTranslate(connect(mapStateToProps, mapDispatchToProps)(Students));
