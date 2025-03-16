export const BubbleIcons = () => {
  const icons = [
    "/svg/js.svg",
    "/svg/react.svg",
    "/svg/firebase.svg",
    "/svg/css.svg",
    "/svg/html.svg",
    "/svg/node.svg",
    "/svg/mongodb.svg",
    "/svg/docker.svg",
    "/svg/php.svg",
    "/svg/sql.svg",
    "/svg/ts.svg",
    "/svg/sass1.svg",
   
  ]; 

  return (
    <div className="bubble-container">
      {icons.map((icon, index) => (
        <figure
          key={`bubble-icon-${index}`}
          className="ball bubble floating"
          // style={{ animationDelay: `${index * 0.5}s` }}
        >
          <img src={icon} alt="Bubble Icon" className="bubble-svg" />
        </figure>
      ))}
    </div>
  );
};
