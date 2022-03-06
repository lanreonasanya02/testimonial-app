import React from "react";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import Main from "./Main";
import Main2 from "./Main2";
import Navbar from "./Navbar";
import Stories1 from "./Stories1";
import Stories2 from "./Stories2";
import SubNavbar from "./SubNavbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Header />
      <Main />
      <Stories1 />
      <Main2 />
      <Stories2 />
      <Footer />
      <Footer2 />
    </>
  );
};

export default Home;
