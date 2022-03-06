import React from "react";
import circle from "./images/circle7.png";
import woman from "./images/woman.png";
import curvedLine from "./images/curvedline.png";

const Main2 = () => {
  return (
    <section className="main-2">
      <div className="main-body">
        <div className="main-text">
          <h1>Josiah's Experience</h1>
          <p className="customer">
            <span>VENDOR</span>
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

        <div className="main-images">
          <img src={circle} alt="eclipse" className="first-image" />
          <img src={woman} alt="woman-shopping" className="second-image" />
        </div>
      </div>
    </section>
  );
};

export default Main2;
