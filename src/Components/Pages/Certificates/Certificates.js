import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { APIVariables } from "../../../Shared/api";
import StyledCertificate from "./StyledCertificates";
import LeftArrow from "../../../Assets/Icons/left-arrow.png";
import RightArrow from "../../../Assets/Icons/right-arrow.png";
import RightArrowDisabled from "../../../Assets/Icons/right-arrow-disabled.png";
import Download from "../../../Assets/Icons/download.png";
import AdeverintaStudent from "../../../Assets/Images/AdeverintaStudent.png";
import CerereRestituireTaxa from "../../../Assets/Images/CerereRestituireTaxa.png";
import StudentCertificate from "./AllCertificates/StudentCertificate/StudentCertificate";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { notifySuccess } from "../../Common/ToastNotification/ToastNotification";
import { withTranslate } from 'react-redux-multilingual'
import { connect } from "react-redux";
import TaxRefundRequest from "./AllCertificates/TaxRefundRequest/TaxRefundRequest";

const Certificates = ({ ...props }) => {
  const [certificates, setCertificates] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [certificateSelected, setCertificateSelected] = useState();
  const [pageState, setPageState] = useState(0);
  const [reference, setReference] = useState();
  const [description, setDescription] = useState();
  const [description1, setDescription1] = useState();
  const [description2, setDescription2] = useState();

  useEffect(() => {
    getCertificatesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCertificatesData = async () => {
    setIsLoading(true);
    const response = await axios.get(APIVariables.CERTIFICATES);

    if (response.status === 200) {
      setCertificates(response.data);
      setIsLoading(false);
    }
  };

  const handleDownloadPdf = async () => {
    const element = reference.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
    setPageState(0);
    setCertificateSelected();
    setDescription();
    setDescription1();
    setDescription2();
    notifySuccess("Certificate successfully downloaded!");
  };

  console.log("certificateSelected :>> ", certificateSelected);
  return (
    <StyledCertificate>
      <div className="page--title--add mb1 mt1">
        <div>
          <div className="btn--container">
            {pageState !== 0 && (
              <button
                className="previous-btn"
                onClick={() => {
                  setPageState(pageState - 1);
                  if (pageState === 1) {
                    setDescription();
                    setDescription1();
                    setDescription2();
                  }
                }}
              >
                <img src={LeftArrow} alt="Previous" /> {props.translate("previous")}
              </button>
            )}
          </div>
        </div>
        <div className="page--title-text">
          {pageState === 0 ? props.translate("certificates") : certificateSelected.title === "Student Certificate" && props.translate("student_certificate_title")}
        </div>
        <div className="btn--container">
          <button
            className={
              certificateSelected ? pageState === 0 ? "next-btn" : (pageState >= 1 && (certificateSelected.title === "Student Certificate" ? description : (description && description1 && description2))) ? "next-btn" : "next-btn next-btn-disabled" : "next-btn next-btn-disabled"
            }
            onClick={() => {
              if (pageState <= 1) {
                if (certificateSelected) {
                  if (pageState === 0) {
                    setPageState(pageState + 1);
                  }
                  if (pageState === 1 && (certificateSelected.title === "Student Certificate" ? description : (description && description1 && description2))) {
                    setPageState(pageState + 1);
                  }
                }
              } else {
                handleDownloadPdf();
              }
            }}
          >
            {pageState <= 1 ? (
              <>
                {props.translate("next")}
                <img
                  src={certificateSelected ? pageState === 0 ? RightArrow : (pageState >= 1 && (certificateSelected.title === "Student Certificate" ? description : (description && description1 && description2))) ? RightArrow : RightArrowDisabled : RightArrowDisabled}
                  alt="Next"
                />
              </>
            ) : (
              <>
                {props.translate("download")}
                <img src={Download} alt="Download" />
              </>
            )}
          </button>
        </div>
      </div>
      {
        pageState === 0 ? (
          isLoading ? (
            <Skeleton variant="rectangular" animation="wave" />
          ) : (
            <div className="certificate--cards--container">
              {certificates?.map((certificate) => (
                <div
                  className="certificate--card cursorPointer"
                  key={certificate.id}
                  onClick={() => {
                    if (certificateSelected) {
                      if (certificateSelected.id !== certificate?.id) {
                        setCertificateSelected(certificate)
                      } else {
                        setCertificateSelected()
                      }
                    } else { setCertificateSelected(certificate) }
                  }}
                >
                  {certificate.title === "Student Certificate" ?
                    <img src={AdeverintaStudent}
                      alt={props.translate("certificate")}
                      className={certificateSelected?.id === certificate?.id ? "certificate--image--selected" : "certificate--image"}
                    />
                    : certificate.title === "Tax refund request" ? <img src={CerereRestituireTaxa}
                      alt={props.translate("certificate")}
                      className={certificateSelected?.id === certificate?.id ? "certificate--image--selected" : "certificate--image"}
                    />
                      : certificate.title}
                </div>
              ))}
            </div>
          )
        ) : certificateSelected.title === "Student Certificate" ? (
          <StudentCertificate
            setReference={setReference}
            pageState={pageState}
            description={description}
            setDescription={setDescription}
            translate={props.translate}
          />
        ) : certificateSelected.title === 'Tax refund request' ?
          <TaxRefundRequest
            setReference={setReference}
            pageState={pageState}
            description={description}
            setDescription={setDescription}
            description1={description1}
            setDescription1={setDescription1}
            description2={description2}
            setDescription2={setDescription2}
            translate={props.translate} />
          : ""
      }
    </StyledCertificate >
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

export default withTranslate(connect(mapStateToProps, mapDispatchToProps)(Certificates));
