import React from "react";
import styles from "./CertifiedCard.module.css";



const certificates = [
  {
    title: "CouseNet Accelerator",
    description:
      "CourseNet......",
    image: "CompetencyCertificateYohanes-32381 copy.jpg",
  },
  {
    title: "CourseNet Attendance",
    description:
      "CourseNet....",
    image: "CompletionCertificateYohanes-32381.jpg",
  },
  {
    title: "Sololearn",
    description: "Sololearn...",
    image: "5b11d85b-1bbc-4c3a-8ea3-8eaf58b3d8a7.jpg",
  }
];

const CertifiedCard = () => {
  return (
    <div className={styles.container}>
      {certificates.map((certificate, index) => (
        <div className={styles.card} key={index}>
          <img src={certificate.image} alt={certificate.title} className={styles.image} />
          <div className={styles.content}>
            <h3 className={styles.title}>{certificate.title}</h3>
            <p className={styles.description}>{certificate.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertifiedCard;
