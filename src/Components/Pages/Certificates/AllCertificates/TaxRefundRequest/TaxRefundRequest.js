import React, { useRef, useEffect } from "react";
import StyledTaxRefundRequest from './StyledTaxRefundRequest';
import { TextField } from "@mui/material";
import moment from "moment";

const TaxRefundRequest = ({ ...props }) => {
    const printRef = useRef();

    useEffect(() => {
        props.setReference(printRef);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [printRef]);

    return (
        <StyledTaxRefundRequest ref={printRef}>
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
            <div className="certificate--signatures mt3">
                <div>
                    <div className="center">DECAN,</div>
                    <div>Prof.univ.dr.ing. Stefan-Gheorghe PENTIUC</div>
                </div>
                <div>
                    <div className="center">RECTOR,</div>
                    <div>Prof.univ.dr.ing Valentin POPA</div>
                </div>
            </div>
            <div className="center mt2">
                <b>DOMNULE RECTOR,</b>
            </div>
            <div className="certificate--text mt2">
                Studentul(a) .........., CNP: .........., ID PeopleSoft ....., student la Facultatea de Inginerie Electrica
                si Stiinta Caluclatoarelor, programul de studii ....., anul ....., invatamnat cu frecventa (de zi),
                fara taxa/cu taxa, an universita 20../20.., va rog sa binevoiti a-mi aproba RESTITUIREA sumei de{" "}
                {props.pageState === 1 ? (
                    <TextField
                        name="description"
                        label={props.translate("student_certificate_input")}
                        variant="outlined"
                        value={props.description ?? ""}
                        onChange={(e) => props.setDescription(e.target.value)}
                        size="small"
                    />
                ) : (
                    <span className="input--decoration">{`${props.description ?? ""}.`}</span>
                )}, reprezentand {props.pageState === 1 ? (
                    <TextField
                        name="description1"
                        label={props.translate("student_certificate_input")}
                        variant="outlined"
                        value={props.description1 ?? ""}
                        onChange={(e) => props.setDescription1(e.target.value)}
                        size="small"
                    />
                ) : (
                    <span className="input--decoration">{`${props.description ?? ""}`}</span>
                )}. Motivul{" "}
                {props.pageState === 1 ? (
                    <TextField
                        name="description2"
                        label={props.translate("student_certificate_input")}
                        variant="outlined"
                        value={props.description2 ?? ""}
                        onChange={(e) => props.setDescription2(e.target.value)}
                        size="small"
                    />
                ) : (
                    <span className="input--decoration">{`${props.description ?? ""}.`}</span>
                )}
            </div>
            <div className="certificate--signatures mt3">
                <div>
                    <div className="center">
                        Data,
                    </div>
                    <div>
                        {moment().format('DD/MM/YYYY')}
                    </div>
                </div>
                <div>
                    <div className="center">
                        Semnatura,
                    </div>
                    <div>
                        NUME.PRENUME
                    </div>
                </div>
            </div>
            <br />
            <div>
                <span>
                    <b>Date confirmate de Secretariatul Facultatii</b>
                </span>
                <br />
                <span>
                    Nume prenume solicitant
                </span>
                <br />
                <span>
                    Program studii/forma de invatamant:
                </span>
                <br />
                <span>
                    Confirmarea motivului invocat(cu documente atasate)
                </span>
            </div>
            <div className="certificate--signatures mt3">
                <div>
                    <div className="center">Secretar sef facultate,</div>
                    <div>Elena CURELARU</div>
                </div>
                <div>
                    <div className="center">Secretar program studii,</div>
                    <div>nume prenume</div>
                </div>
            </div>
        </StyledTaxRefundRequest>
    )
}

export default TaxRefundRequest