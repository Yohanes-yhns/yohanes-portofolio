import React from "react";
import styles from "./ProjectCards.module.css";

const projects = [
  {
    title: "CashierApp",
    description:
      "CashierApp is......",
    image: "https://source.unsplash.com/400x200/?code,project",
  },
  {
    title: "NestCharts",
    description:
      "NestCharts is....",
    image: "https://source.unsplash.com/400x200/?javascript,app",
  },
  {
    title: "Soteria",
    description:
      "Soteria is...",
    image: "https://source.unsplash.com/400x200/?database,code",
  },
];

const ProjectCards = () => {
  return (
    <div className={styles.container}>
      {projects.map((project, index) => (
        <div className={styles.card} key={index}>
          <img src={project.image} alt={project.title} className={styles.image} />
          <div className={styles.content}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
