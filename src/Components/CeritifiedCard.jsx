import React from "react";
import styles from "./CertifiedCard.module.css";

const certificates = [
  {
    title: "CouseNet",
    description:
      "CourseNet......",
    image: "https://source.unsplash.com/400x200/?code,project",
  },
  {
    title: "CourseNet",
    description:
      "CourseNet....",
    image: "https://source.unsplash.com/400x200/?javascript,app",
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
