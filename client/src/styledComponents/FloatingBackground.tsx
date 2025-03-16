import React from "react";


const imageUrls = [
  { src: "/svg/react.svg", left: "10%", top: "20%" },
  { src: "/svg/firebase.svg", left: "30%", top: "10%" },
  { src: "/svg/node.svg", left: "50%", top: "30%" },
  { src: "/svg/js.svg", left: "70%", top: "15%" },
  { src: "/svg/css.svg", left: "90%", top: "25%" },
  { src: "/svg/php.svg", left: "15%", top: "50%" },
  { src: "/svg/html.svg", left: "35%", top: "60%" },
  { src: "/svg/mongodb.svg", left: "55%", top: "75%" },
  { src: "/svg/ts.svg", left: "75%", top: "65%" },
  { src: "/svg/sql.svg", left: "5%", top: "75%" },
];

const FloatingBackground: React.FC = () => {
  return (
    <div className="floating-bg">
      {imageUrls.map((item, index) => (
        <div
          key={index}
          className="bubble-svg"
          style={{
            left: item.left,
            top: item.top,
            animationDelay: `${index * 0.5}s`, 
          }}
        >
          <img
            src={item.src}
            className="floating-image"
            alt={`floating-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingBackground;
