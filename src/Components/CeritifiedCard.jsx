import React from "react";
import styles from "./CertifiedCard.module.css";



const certificates = [
  {
    title: "CouseNet",
    description:
      "CourseNet......",
    image: "CompetencyCertificateYohanes-32381 copy.jpg",
  },
  {
    title: "CourseNet",
    description:
      "CourseNet....",
    image: "CompletionCertificateYohanes-32381.jpg",
  },
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
