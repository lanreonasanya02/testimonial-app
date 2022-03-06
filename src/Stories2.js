import React, { useState } from "react";
import vendorData1 from "./Vendors2";
import vendorData2 from "./Vendors3";

const Stories2 = () => {
  const [vendors, setVendor] = useState(vendorData1);
  const [vendors2, setVendor2] = useState(vendorData2);

  return (
    <section className="stories-section second-story-section">
      <div className="stories-1">
        {vendors.map((vendor1) => {
          const { image, firstName, lastName, location, story, platform, id } =
            vendor1;
          return (
            <article key={id} className="stories-details">
              <img src={image} alt={firstName} className="photo" />

              <header className="head">
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
              </header>
              <header className="sub-head-2">
                <h4 className="location">{location}</h4>
                <h4 className="platform-2">{platform}</h4>
              </header>
              <p className="story">{story}</p>
            </article>
          );
        })}
      </div>

      <div className="stories-2">
        {vendors2.map((vendor2) => {
          const { image, firstName, lastName, location, story, platform, id } =
            vendor2;
          return (
            <article key={id} className="stories-details">
              <img src={image} alt={firstName} className="photo" />

              <header className="head">
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
              </header>
              <header className="sub-head-2">
                <h4 className="location">{location}</h4>
                <h4 className="platform-2">{platform}</h4>
              </header>
              <p className="story">{story}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Stories2;
