
import { Projects } from "./Projects";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="left-column">
          <h1>Hi. My name is Alinde.</h1>
          
          <p>
           
            If you look to the right you can see some of my projects. Feel free
            to take a look!
          </p>
          <h4>
            If you have any questions or want to get in touch with me, email: <br />
            Please {""}<a href={"mailto:ost.alinde@gmail.com"}></a>
          </h4>
          <img
            className="qr-code"
            src="/src/images/qr-code.png"
            alt="qr-code"
          />
        </div>

        <div className="right-column">
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="#">Weather App(Using weatherbit API)</a>
            </li>
            <li>
              <a href="#">E-commerce with stripe</a>
            </li>
            <li>
              <a href="#">Subscription Newsletter App</a>
            </li>
            <li>
              <a href="#">Image Search(Using Google Image Api)</a>
            </li>
          </ul>
          <div className="tech-container">
            <h2 id="my-techstack">Tech-stack</h2>
            <div className="tech-stack">
              <h3>JavaScript</h3>
              <h3>React</h3>
              <h3>TypeScript</h3>
              <h3>HTML</h3>
              <h3>CSS</h3>
            </div>
            <div className="tech-stack">
              <h4>Node.js</h4>
              <h4>Express.js</h4>
              <h4>PHP</h4>
              <h4>WordPress</h4>
              <h4>Git/Github</h4>
            </div>
            <div className="tech-stack">
              <h4>MySQL</h4>
              <h4>MongoDB</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="pictures">
        <img
          className="me"
          src="/src/images/russin.jpg"
          alt="picture of me and Russin"
        />
        <img
          className="me"
          src="/src/images/alinderussin.png"
          alt="picture of me and Russin"
        />
      </div>
      <i>Me and my dog Russin.</i>
      <br /> <br /> <br />
      <h1 id="my-projects">Projects</h1>
      <Projects />
    </>
  );
};

export default Main;
