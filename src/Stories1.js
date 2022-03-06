import React, { useState } from "react";
import customerData from "./Customers";
import vendorData from "./Vendors";

const Stories1 = () => {
  const [customers, setCustomers] = useState(customerData);
  const [vendors, setVendors] = useState(vendorData);

  return (
    <section className="stories-section">
      <div className="stories-1">
        {customers.map((customer) => {
          const { image, firstName, lastName, location, story, platform, id } =
            customer;
          return (
            <article key={id} className="stories-details">
              <img src={image} alt={firstName} className="photo" />

              <header className="head">
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
              </header>
              <header className="sub-head">
                <h4 className="location">{location}</h4>
                <h4 className="platform">{platform}</h4>
              </header>
              <p className="story">{story}</p>
            </article>
          );
        })}
      </div>

      <div className="stories-2">
        {vendors.map((vendor) => {
          const { image, firstName, lastName, location, story, platform, id } =
            vendor;
          return (
            <article key={id} className="stories-details">
              <img src={image} alt={firstName} className="photo" />

              <header className="head">
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
              </header>
              <header className="sub-head">
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

export default Stories1;
