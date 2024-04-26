import { Helmet as HelmetWrapper } from "react-helmet";
import React from "react";
import logo from "../../images/logo.png";

const SEO = {
  title: "Christopher Akanmu - Senior Software Engineer",
  description:
    "Experienced Software Engineer specializing in frontend development with expertise in React and Angular. Proven track record in designing and implementing interactive and user-friendly web applications. Skilled in AWS, TypeScript, and modern web technologies. Strong collaborator with international teams, contributing to the development of innovative e-learning platforms and productivity tools. Committed to delivering high-quality products and ensuring seamless user experiences. Trusted contributor to successful software releases and product enhancements. Continuous learner with a passion for staying updated with the latest industry trends and technologies..",
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
