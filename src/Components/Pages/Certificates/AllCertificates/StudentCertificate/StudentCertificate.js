import React, { useState, useRef, useEffect } from "react";
import { TextField } from "@mui/material";
import StyledStudentCertificate from "./StyledStudentCertificate";

const StudentCertificate = ({ ...props }) => {
  const printRef = useRef();

  useEffect(() => {
    props.setReference(printRef);
  }, [printRef]);

  return (
    <StyledStudentCertificate ref={printRef}>
      <div>
        <span>
          <b>UNIVERSITATEA “ŞTEFAN CEL MARE” DIN SUCEAVA</b>
        </span>
        <br />
        <span>
          <b>FACULTATEA DE INGINERIE ELECTRICĂ ŞI ŞTIINŢA CALCULATOARELOR</b>
        </span>
        <br />
        <span>
          <b>Programul de studiu: CALCULATOARE</b>
        </span>
      </div>
      <div className="right mt2">Nr ........../FIESC/..........</div>
      <div className="center mt2">
        <b>ADEVERINTA</b>
      </div>
      <div className="certificate--text mt2">
        Studentul(a) .......... este inscris(a) in anul ...... de studiu, an
        universitar 2020/2021, invatamant cu frecventa (IF), studii universitare
        de licenta, cu durata de 4 ani, fara taxa / cu taxa.
      </div>
      <div className="certificate--text">
        Adeverinta se elibereaza pentru a-i servi la{" "}
        {props.pageState === 1 ? (
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            value={props.description ?? ""}
            onChange={(e) => props.setDescription(e.target.value)}
            size="small"
          />
        ) : (
          `${props.description ?? ""}.`
        )}
      </div>
      <div className="certificate--signatures mt3">
        <div>
          <div className="center">DECAN,</div>
          <div>Prof.univ.dr.ing. Laurențiu Dan MILICI</div>
        </div>
        <div>
          <div className="center">SECRETAR FACULTATE,</div>
          <div>Ec. Laura Cătălina DOSPINESCU</div>
        </div>
      </div>
    </StyledStudentCertificate>
  );
};

export default StudentCertificate;
