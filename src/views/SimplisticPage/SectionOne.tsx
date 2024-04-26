import React from "react";

const SectionOne = ({
  landingImageLeft,
  landingImageOpacity,
}: {
  landingImageLeft: string | number;
  landingImageOpacity: number;
}) => {
  return (
    <div className="introduction">
      <div
        className={"introduction--new-image"}
        style={{
          left: landingImageLeft,
          opacity: landingImageOpacity,
        }}
      ></div>
    </div>
  );
};

export default SectionOne;
