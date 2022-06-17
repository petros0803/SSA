import React from "react";
import StyledTable from "./StyledTable";
import { TABLE_LANGUAGE } from "../../../Shared/table.language";

//Table Icons View, Edit, Delete
import EYE from "../../../Assets/Icons/eye.png";
import EDIT from "../../../Assets/Icons/edit.png";
import DELETE from "../../../Assets/Icons/x-octagon.png";

const Table = ({
  colData,
  data,
  setModalState,
  openModal,
  setItemToEdit,
  specializations,
}) => {
  const handleModalStateChange = (state, id) => {
    setModalState(state);
    setItemToEdit(id);
    openModal(true);
  };
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            {colData.map((col, key) => (
              <td key={key}>{TABLE_LANGUAGE[col]}</td>
            ))}
            <td>{TABLE_LANGUAGE.actions}</td>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => (
            <tr key={key}>
              {colData.map((col, index) => (
                <td key={index}>
                  {col !== "specialization"
                    ? value[col]
                    : specializations.map(
                        (specialization) =>
                          specialization.id === value[col] &&
                          specialization.abbreviation
                      )}
                </td>
              ))}
              <td>
                <img
                  src={EYE}
                  alt="view"
                  title="View"
                  onClick={() => handleModalStateChange("view", value.id)}
                />
                <img
                  src={EDIT}
                  alt="edit"
                  title="Edit"
                  onClick={() => handleModalStateChange("edit", value.id)}
                />
                <img
                  src={DELETE}
                  alt="delete"
                  title="Delete"
                  onClick={() => handleModalStateChange("delete", value.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTable>
  );
};

export default Table;
