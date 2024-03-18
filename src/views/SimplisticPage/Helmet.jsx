import { Helmet as HelmetWrapper } from "react-helmet";
import React from "react";
import logo from "../../images/logo.png";

const SEO = {
  title: "Christopher Akanmu - Software Engineer + UI/UX Designer",
  description:
    "Christopher Akanmu is a world-class Cloud Solutions Architect at Trilogy, Ex-Fullstack Software Engineer at Andela, Ex-Quality Assurance Engineer at ProdPerfect and UI/UX Designer from Lagos, Nigeria.",
  url: "https://www.christopherakanmu.com/",
  image: logo,
};

const Helmet = () => (
  <HelmetWrapper
    title={SEO.title}
    meta={[
      {
        name: "description",
        property: "og:description",
        content: SEO.description,
      },
      { property: "og:title", content: SEO.title },
      { property: "og:url", content: SEO.url },
      { property: "og:image", content: SEO.image },
      { property: "og:image:type", content: "image/png" },
      { property: "twitter:image:src", content: SEO.image },
      { property: "twitter:title", content: SEO.title },
      { property: "twitter:description", content: SEO.description },
    ]}
  />
);

export default Helmet;
