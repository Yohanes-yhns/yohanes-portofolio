// import React, { useRef, useEffect, useState } from "react";
// import "./ScrollVelocity.css";

// const logos = [
//   { src: process.env.PUBLIC_URL + "/logo512.png", name: "ReactJS" },
//   { src: process.env.PUBLIC_URL + "/JavaScript.png", name: "Javascript" },
//   { src: process.env.PUBLIC_URL + "/PostgresSQL.png", name: "Postgres" },
//   { src: process.env.PUBLIC_URL + "/HTML5.png", name: "HTML" },
//   { src: process.env.PUBLIC_URL + "/CSS3.png", name: "CSS" },
//   { src: process.env.PUBLIC_URL + "/Node.js.png", name: "Node JS" },
//   { src: process.env.PUBLIC_URL + "/Express.png", name: "Express JS" },
//   { src: process.env.PUBLIC_URL + "/Git.png", name: "Git" },
//   { src: process.env.PUBLIC_URL + "/Sequelize.png", name: "Sequelize" },
//   { src: process.env.PUBLIC_URL + "/Postman.png", name: "Postman" },
//   { src: process.env.PUBLIC_URL + "/DBeaver.png", name: "DBeaver" },
//   { src: process.env.PUBLIC_URL + "/Tailwind.png", name: "Tailwind" },
//   { src: process.env.PUBLIC_URL + "/Firebase.png", name: "Fairebase" },
// ];

// const ScrollVelocity = () => {
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);
//   const animationRef = useRef(null);
//   const position = useRef(0);
//   const [contentWidth, setContentWidth] = useState(0);
//   const speed = 0.5;

//   const calculateContentWidth = () => {
//     if (!contentRef.current) return 0;
//     const items = contentRef.current.querySelectorAll(".logo-item");
//     let totalWidth = 0;
//     items.forEach((item) => {
//       const style = window.getComputedStyle(item);
//       totalWidth += item.offsetWidth +
//         parseFloat(style.marginLeft) +
//         parseFloat(style.marginRight);
//     });
//     return totalWidth / 2;
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const width = calculateContentWidth();
//       setContentWidth(width);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (!contentWidth) return;
//     let lastTime = 0;
//     const frameDuration = 1000 / 60;

//     const animate = (timestamp) => {
//       if (!lastTime) lastTime = timestamp;
//       const deltaTime = timestamp - lastTime;
//       position.current -= speed * (deltaTime / frameDuration);
//       position.current %= contentWidth;

//       if (contentRef.current) {
//         contentRef.current.style.transform = `translateX(${position.current}px)`;
//       }

//       lastTime = timestamp;
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//     };
//   }, [contentWidth]);

//   useEffect(() => {
//     const checkReady = () => {
//       const newWidth = calculateContentWidth();
//       if (newWidth > 0) {
//         setContentWidth(newWidth);
//       }
//     };

//     checkReady();

//     const images = contentRef.current?.querySelectorAll("img") || [];
//     const onLoad = () => checkReady();
//     images.forEach((img) => {
//       if (img.complete) {
//         onLoad();
//       } else {
//         img.addEventListener("load", onLoad);
//       }
//     });

//     return () => {
//       images.forEach((img) => {
//         img.removeEventListener("load", onLoad);
//       });
//     };
//   }, []);

//   return (
//     <div className="marquee-container" ref={containerRef}>
//       <div
//         className="marquee-content"
//         ref={contentRef}
//         style={{ willChange: "transform" }}
//       >
//         {[...logos, ...logos].map((logo, index) => (
//           <div className="logo-item" key={`${logo.name}-${index}`}>
//             <img
//               src={logo.src}
//               alt={logo.name}
//               className="logo"
//               loading="lazy"
//               width="50"
//               height="50"
//             />
//             <span className="logo-name">{logo.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollVelocity;

import React from "react";
import "./ScrollVelocity.css";

const logos = [
  { src: process.env.PUBLIC_URL + "/logo512.png", name: "ReactJS" },
  { src: process.env.PUBLIC_URL + "/JavaScript.png", name: "Javascript" },
  { src: process.env.PUBLIC_URL + "/PostgresSQL.png", name: "Postgres" },
  { src: process.env.PUBLIC_URL + "/HTML5.png", name: "HTML" },
  { src: process.env.PUBLIC_URL + "/CSS3.png", name: "CSS" },
  { src: process.env.PUBLIC_URL + "/Node.js.png", name: "Node JS" },
  { src: process.env.PUBLIC_URL + "/Express.png", name: "Express JS" },
  { src: process.env.PUBLIC_URL + "/Git.png", name: "Git" },
  { src: process.env.PUBLIC_URL + "/Sequelize.png", name: "Sequelize" },
  { src: process.env.PUBLIC_URL + "/Postman.png", name: "Postman" },
  { src: process.env.PUBLIC_URL + "/DBeaver.png", name: "DBeaver" },
  { src: process.env.PUBLIC_URL + "/Tailwind.png", name: "Tailwind" },
  { src: process.env.PUBLIC_URL + "/Firebase.png", name: "Firebase" },
];

const ScrollVelocity = () => {
  // duplikasikan list logo agar bisa loop
  const scrollingLogos = [...logos, ...logos];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {scrollingLogos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img
              src={logo.src}
              alt={logo.name}
              className="logo"
              loading="lazy"
            />
            <span className="logo-name">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollVelocity;
