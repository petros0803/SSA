import React from "react";
import StyledTable from "./StyledTable";
import { withTranslate } from 'react-redux-multilingual'
import { connect } from "react-redux";

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
  ...props
}) => {
  const handleModalStateChange = (state, id) => {
    setModalState(state);
    setItemToEdit(id);
    openModal(true);
  };

  const TABLE_LANGUAGE = {
    id: props.translate("id"),
    firstName: props.translate("firstName"),
    lastName: props.translate("lastName"),
    year: props.translate("year"),
    specialization: props.translate("specialization"),
    class: props.translate("class"),
    code: props.translate("code"),
    actions: props.translate("actions"),
    email: props.translate("email"),
    address: props.translate("address"),
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
                  title={props.translate("view")}
                  onClick={() => handleModalStateChange("view", value.id)}
                />
                <img
                  src={EDIT}
                  alt="edit"
                  title={props.translate("edit")}
                  onClick={() => handleModalStateChange("edit", value.id)}
                />
                <img
                  src={DELETE}
                  alt="delete"
                  title={props.translate("delete")}
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

const mapStateToProps = (state) => {
  return {
    ...state.reducer,
    ...state.translate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // logout: () => dispatch(logout()),
  };
};

export default withTranslate(connect(mapStateToProps, mapDispatchToProps)(Table));
