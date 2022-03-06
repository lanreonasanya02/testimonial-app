import React from "react";
import circle from "./images/circle8.png";
import girls from "./images/girls.png";
import curvedLine from "./images/curvedline.png";

const Main = () => {
  return (
    <section className="main">
      <div className="main-body">
        <div className="main-images">
          <img src={circle} alt="eclipse" className="first-image" />
          <img src={girls} alt="black-girls" className="second-image" />
        </div>

        <div className="main-text">
          <h1>Tolu & Joy's Experience</h1>
          <p className="customer">
            <span>CUSTOMER</span>
          </p>
          <p className="body">
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <p className="share">SHARE YOUR OWN STORY!</p>

          <img src={curvedLine} alt="line" className="curved-line" />
        </div>
      </div>
    </section>
  );
};

export default Main;
