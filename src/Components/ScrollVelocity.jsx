import React from "react";
import "./ScrollVelocity.css";

const logos = [
  { src: process.env.PUBLIC_URL + "/logo512.png", name: "ReactJS" },
  { src: process.env.PUBLIC_URL + "/Javascript.png", name: "Javascript" },
  { src: process.env.PUBLIC_URL + "/PostgresSQL.png", name: "Postgres" },
  { src: process.env.PUBLIC_URL + "/HTML5.png", name: "HTML" },
  { src: process.env.PUBLIC_URL + "/CSS3.png", name: "CSS" },
  { src: process.env.PUBLIC_URL + "/Node.js.png", name: "Node JS" },
  { src: process.env.PUBLIC_URL + "/Express.png", name: "Express JS" },
  { src: process.env.PUBLIC_URL + "/Git.png", name: "Git" },
  { src: process.env.PUBLIC_URL + "/Sequelize.png", name: "Sequelize" },
  { src: process.env.PUBLIC_URL + "/Postman.png", name: "Postman" },
  { src: process.env.PUBLIC_URL + "/DBeaver.png", name: "DBeaver" },
];


const ScrollVelocity = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo.src} alt={logo.name} className="logo" />
            <span className="logo-name">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollVelocity;
