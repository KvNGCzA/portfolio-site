import landingImage from "../../images/landing-image.svg";
import description from "../../images/description.svg";
import React from "react";

const SectionOne = ({ landingImageLeft, landingImageOpacity }) => {
  return (
    <div className="introduction">
      <img
        className="introduction--image-main"
        style={{
          left: landingImageLeft,
          opacity: landingImageOpacity,
        }}
        src={landingImage}
        alt="landing christopher akanmu portfolio"
      />
      <img
        className="introduction--image-mobile"
        style={{
          left: landingImageLeft,
          opacity: landingImageOpacity,
        }}
        src={description}
        alt="landing christopher akanmu portfolio"
      />
    </div>
  );
};

export default SectionOne;
