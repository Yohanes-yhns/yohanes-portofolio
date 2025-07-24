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
    title: "Hacktiv8",
    description: "Sololearn...",
    image: "twcertcoding-12c6ee76-6e56-435b-a86e-0e5f3ad423ac.jpg",
  },
  {
    title: "Sololearn",
    description: "Sololearn...",
    image: "5b11d85b-1bbc-4c3a-8ea3-8eaf58b3d8a7.jpg",
  },
  {
    title: "IBMGraniteModel566",
    description: "IBM...",
    image: "CodeGenerationIBBMCertification.png",
  },
  {
    title: "IBMGraniteModel566",
    description: "IBM...",
    image: "IBMCertification566.png",
  },
  {
    title: "IBMGraniteModel",
    description: "IBM...",
    image: "IBMGraniteModelCertification.png",
  },
  {
    title: "UseGenerateIBMAI",
    description: "IBM...",
    image: "UseGenerateAICertification.png",
  },
  {
    title: "UseGenerateIBMAI",
    description: "IBM...",
    image: "code-generation-and-optimization-using-ibm-granite.png",
  },
  {
    title: "UseGenerateIBMAI",
    description: "IBM...",
    image: "Digital Sticker_IBM Granite Models for Software Development.png",
  },
  {
    title: "UseGenerateIBMAI",
    description: "IBM...",
    image: "Use Generative AI for Software Development.png",
  },
];

const CertifiedCard = () => {
  return (
    <div className={styles.container}>
      {certificates.map((certificate, index) => (
        <div className={styles.card} key={index}>
          <img src={certificate.image} alt={certificate.title} className={styles.image} />
          
        </div>
      ))}
    </div>
  );
};

export default CertifiedCard;
