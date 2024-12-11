import React from "react";
import Footer from "../../components/LandingPage/components/Footer";
import HeroRewards from "./HeroRewards";
import Step1Image from "./assets/step1.webp";
import Step2Image from "./assets/step2.webp";
import Step3Image from "./assets/step3.webp";
import StepComponent from "./steps/StepComponent";
import toast from "react-hot-toast";
import OwnlinkRewardsApk from "./assets/ownlink-rewards.apk";
import { saveAs } from "file-saver";
import CTARewards from "./CTARewards";
import ProductHuntBadge from "../../components/ProductHuntBadge";

const RewardsLandingPage = () => {
  const handleApkDownload = () => {
    try {
      saveAs(OwnlinkRewardsApk, "ownlink-rewards.apk");
      toast.success("Downloading APK");
    } catch (error) {
      toast.error("Download Failed");
    }
  };
  return (
    <div className="font-[Urbanist] bg-[#0A101E] ">
      <HeroRewards handleApkDownload={handleApkDownload} />
      <StepComponent
        isImageLeft={false}
        heroImage={Step1Image}
        title="Discover Your Favorite Creators"
        description="Search for and find your favorite creators easily. Once
                you&#39;ve found them, simply copy their unique link in bio to
                get started!"
        stepNumber={1}
        isDownloadButton={false}
        handleApkDownload={handleApkDownload}
      />
      <StepComponent
        isImageLeft={true}
        heroImage={Step2Image}
        title="Share with Friends"
        description="“Spread the word by sharing your favorite creator&#39;s link with your friends. Each share earns you scratch cards, which can be scratched to reveal points!"
        stepNumber={2}
        isDownloadButton={false}
        handleApkDownload={handleApkDownload}
      />{" "}
      <StepComponent
        isImageLeft={false}
        heroImage={Step3Image}
        title="Redeem for Cool Goodies"
        description="Accumulate points by sharing and earn rewards like gift cards, merchandise, and exclusive experiences in our reward shop. The more you share, the more you earn!"
        stepNumber={3}
        isDownloadButton={false}
        handleApkDownload={handleApkDownload}
      />
      <CTARewards handleApkDownload={handleApkDownload} />
      <Footer />
      <ProductHuntBadge />
    </div>
  );
};

export default RewardsLandingPage;
