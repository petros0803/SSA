import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { APIVariables } from "../../../Shared/api";
import StyledCertificate from "./StyledCertificates";
import LeftArrow from "../../../Assets/Icons/left-arrow.png";
import RightArrow from "../../../Assets/Icons/right-arrow.png";
import RightArrowDisabled from "../../../Assets/Icons/right-arrow-disabled.png";
import Download from "../../../Assets/Icons/download.png";
import DownloadDisabled from "../../../Assets/Icons/download-disabled.png";
import StudentCertificate from "./AllCertificates/StudentCertificate/StudentCertificate";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Certificates = () => {
  const [certificates, setCertificates] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [certificateSelected, setCertificateSelected] = useState();
  const [pageState, setPageState] = useState(0);
  const [reference, setReference] = useState();
  const [description, setDescription] = useState();

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
                  }
                }}
              >
                <img src={LeftArrow} alt="Previous" /> Previous
              </button>
            )}
          </div>
        </div>
        <div className="page--title-text">
          {pageState === 0 ? "Certificates" : certificateSelected.title}
        </div>
        <div className="btn--container">
          <button
            className={
              certificateSelected ? "next-btn" : "next-btn next-btn-disabled"
            }
            onClick={() => {
              if (pageState <= 1) {
                if (certificateSelected) {
                  if (pageState === 0) {
                    setPageState(pageState + 1);
                  }
                  if (pageState === 1 && description) {
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
                Next
                <img
                  src={certificateSelected ? RightArrow : RightArrowDisabled}
                  alt="Next"
                />
              </>
            ) : (
              <>
                Download
                <img src={Download} alt="Next" />
              </>
            )}
          </button>
        </div>
      </div>
      {pageState === 0 ? (
        isLoading ? (
          <Skeleton variant="rectangular" animation="wave" />
        ) : (
          <div className="certificate--cards--container">
            {certificates?.map((certificate) => (
              <div
                className="certificate--card cursorPointer"
                key={certificate.id}
                onClick={() => setCertificateSelected(certificate)}
              >
                {certificate.title}
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
        />
      ) : (
        ""
      )}
    </StyledCertificate>
  );
};

export default Certificates;
