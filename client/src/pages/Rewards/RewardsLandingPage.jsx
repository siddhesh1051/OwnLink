import React from "react";
import Hero from "../../components/LandingPage/components/Hero";
import Features from "../../components/LandingPage/components/Features";
import Content2 from "../../components/LandingPage/components/Content2";
import Content from "../../components/LandingPage/components/Content";
import Footer from "../../components/LandingPage/components/Footer";

const LandingPage = () => {
  return (
    <div className="font-[Urbanist] bg-[#0A101E] ">
      <Hero showRewards={false} />
      <Features />
      <Content2 />
      <Content />
      <Footer />
    </div>
  );
};

export default LandingPage;
