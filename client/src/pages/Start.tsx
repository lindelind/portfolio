
import { Projects } from "./Projects";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="left-column">
          <h1>Hi. My name is Alinde.</h1>

          <p>
            I’m a full-stack developer with experience in React, React Native,
            TypeScript, Node.js, Firebase, and API integrations. I love
            combining creativity with problem-solving to build solutions that
            not only work seamlessly but also look great.
            <br />
            <br />
            For me, clear code structure and a user-friendly experience go hand
            in hand—whether it’s ensuring the app is easy to use or making the
            code straightforward to navigate.
            <br />
            <br />
            During my education and internship, I’ve learned so much about
            development and teamwork. My background in customer service has also
            given me valuable insights into user needs, which I bring into every
            project. Creating solutions that are practical, clear, and enjoyable
            to use is what drives me. Now, I’m excited to bring everything I’ve
            learned into the workforce and continue growing as a developer!
          </p>
          <h4>
            If you have any questions or want to get in touch with me, email:{" "}
            <br />
            {""}
            <a href={"mailto:ost.alinde@gmail.com"}>ost.alinde@gmail.com</a>
          </h4>
        </div>

        <div className="right-column">
          <h2 id="my-projects">Projects</h2>
          <ul>
            <li>
              <a href="#">HittaVet - Examensarbete</a>
            </li>
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
          {/* <div className="tech-container">
            <h2 id="my-techstack">Tech-stack</h2>
            <div className="tech-stack">
              <h3>JavaScript</h3>
              <h3>React</h3>
              <h3>TypeScript</h3>
              <h3>HTML</h3>
              <h3>CSS</h3>
            </div>
            <div className="tech-stack">
              <h3>Node.js</h3>
              <h3>Express.js</h3>
              <h4>PHP</h4>
              <h4>WordPress</h4>
              <h4>Git/Github</h4>
            </div>
            <div className="tech-stack">
              <h4>MySQL</h4>
              <h4>MongoDB</h4>
            </div>
          </div> */}
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
    </>
  );
};

export default Main;
