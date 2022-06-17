import React, { useEffect, useState } from "react";
import StyledSecretaries from "./StyledSecretaries";
import axios from "axios";
import { APIVariables } from "../../../Shared/api";
import Table from "../../Common/Table/Table";
import { Pagination, Skeleton, TextField } from "@mui/material";
import SecretaryModal from "./Modals/SecretaryModal";

const Secretaries = () => {
  const [secretaries, setSecretaries] = useState([]);
  const [data, setData] = useState([]);
  const [isSecretaryModalOpen, setIsSecretaryModalOpen] = useState(false);
  const [modalState, setModalState] = useState();
  const [itemToEdit, setItemToEdit] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState();

  const handleClose = () => {
    setIsSecretaryModalOpen(false);
    setTimeout(() => {
      setModalState();
      setItemToEdit();
    }, 100);
  };

  useEffect(() => {
    getSecretariesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSecretariesData = async () => {
    setIsLoading(true);
    const response = await axios.get(APIVariables.SECRETARIES);

    if (response.status === 200) {
      setSecretaries(response.data);
      setTableData();
      setIsLoading(false);
    }
  };

  const loadLazyData = () => {
    getSecretariesData();
  };

  const setTableData = () => {
    setData(["id", "firstName", "lastName", "address"]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StyledSecretaries>
      <div className="page--title--add mb1 mt1">
        <div className="page--title-text">Secretaries</div>
        <div>
          <button
            className="btn-add"
            onClick={() => {
              setIsSecretaryModalOpen(true);
              setModalState("add");
            }}
            title="Add secretary"
          >
            Add Secretary
          </button>
        </div>
      </div>

      <div>
        <TextField
          name="search"
          size="small"
          id="outlined-basic"
          label="Search secretary"
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
          data={secretaries}
          setModalState={setModalState}
          openModal={setIsSecretaryModalOpen}
          setItemToEdit={setItemToEdit}
          isLoading={isLoading}
        />
      )}
      <Pagination count={10} variant="outlined" />
      <SecretaryModal
        open={isSecretaryModalOpen}
        handleClose={handleClose}
        modalState={modalState}
        secretary={
          !isNaN(itemToEdit)
            ? secretaries.find((secretary) => secretary.id === itemToEdit)
            : undefined
        }
        loadLazyData={loadLazyData}
      />
    </StyledSecretaries>
  );
};

export default Secretaries;
