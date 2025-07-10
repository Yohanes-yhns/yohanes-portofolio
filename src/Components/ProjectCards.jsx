// src/components/ProjectCards.jsx
import { useState } from "react";
import styles from "./ProjectCards.module.css";

const projects = [
  {
    title: "SwiftPay",
    description: "SwiftPay is a fast and efficient cashier web application",
    images: ["/SP1.png", "/SP2.png", "/SP3.png", "SP4.png"],
    url: "https://swiftpay-cashier.vercel.app/",
  },
  {
    title: "NestCharts",
    description:
      "NestCharts lets users create interactive and downloadable charts.",
    images: ["/NC1.png", "/NC2.png", "/NC3.png"],
    url: "https://nestcharts.vercel.app/",
  },
  {
    title: "Soteria",
    description: "",
    image: "https://source.unsplash.com/400x200/?database,code",
  },
];

const ProjectCards = () => {
  const [currentIndex, setCurrentIndex] = useState({});

  const handlePrev = (index) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [index]:
        (prev[index] || 0) === 0
          ? projects[index].images.length - 1
          : (prev[index] || 0) - 1,
    }));
  };

  const handleNext = (index) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [index]:
        (prev[index] || 0) === projects[index].images.length - 1
          ? 0
          : (prev[index] || 0) + 1,
    }));
  };

  return (
    <div className={styles.container}>
      {projects.map((project, index) => {
        const currentImgIndex = currentIndex[index] || 0;
        const isCarousel = Array.isArray(project.images);
        const imageSrc = isCarousel
          ? project.images[currentImgIndex]
          : project.image;

        return (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              {isCarousel && (
                <button
                  className={`${styles.navBtn} ${styles.leftBtn}`}
                  onClick={() => handlePrev(index)}
                >
                  ◀
                </button>
              )}

              <div className={styles.imageContainer}>
                <img
                  src={imageSrc}
                  alt={project.title}
                  className={styles.image}
                />
              </div>

              {isCarousel && (
                <button
                  className={`${styles.navBtn} ${styles.rightBtn}`}
                  onClick={() => handleNext(index)}
                >
                  ▶
                </button>
              )}
            </div>

            <div className={styles.content}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <a
                href={project.url}
                className={styles.visitButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCards;
