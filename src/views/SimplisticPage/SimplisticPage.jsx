import "./index.scss";
import React, { useCallback, useEffect, useState } from "react";
import Helmet from "./Helmet";
import Header from "./Header";
import Notification from "./Notification";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

const PERCENTILE = 0.8;

const DEFAULT_FORM_VALUES = {
  body: "",
  email: "",
  fullName: "",
};

const SimplisticPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [menuBack, setMenuBack] = useState("");
  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);
  const [right, setRight] = useState(-210);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [landingImageLeft, setLandingImageLeft] = useState("-100%");
  const [landingImageOpacity, setLandingImageOpacity] = useState(0);

  const setAnimations = useCallback(() => {
    setTimeout(() => {
      setLandingImageLeft(0);
      setLandingImageOpacity(1);
    }, 2000);
  }, []);

  const onScroll = useCallback(() => {
    const height = window.innerHeight;
    const top = window.scrollY;
    const isFirstPage = top < PERCENTILE * height;
    const isSecondPage =
      top > PERCENTILE * height && top < PERCENTILE * (height * 2);

    if (top > 270 && !menuBack) setMenuBack("rgba(63, 61, 86, 0.8)");
    else setMenuBack("");

    if (isFirstPage) setCurrentPage(0);
    else if (isSecondPage) setCurrentPage(1);
    else setCurrentPage(2);
  }, [menuBack]);

  const selectPage = useCallback(
    (currentPage) => {
      document.removeEventListener("scroll", onScroll);
      const height = window.innerHeight;
      const top = currentPage * height;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
      setCurrentPage(currentPage);
      setTimeout(
        () => document.addEventListener("scroll", onScroll, false),
        1000,
      );
    },
    [onScroll],
  );

  useEffect(() => {
    selectPage(0);
    document.addEventListener("scroll", onScroll, false);
    setAnimations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleNotification = useCallback(() => {
    setRight(0);

    setTimeout(() => {
      setRight(-210);
    }, 3000);
  }, []);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSendingMessage(true);

      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...formValues }),
        });

        setFormValues(DEFAULT_FORM_VALUES);
        toggleNotification();
      } catch (err) {
        console.log(err.response);
      }

      setSendingMessage(false);
    },
    [formValues, toggleNotification],
  );

  const onChangeValue = useCallback((key, e) => {
    e.persist();
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [key]: e.target.value,
    }));
  }, []);

  return (
    <div className="simplistic-page">
      <Helmet />
      <Header
        menuBack={menuBack}
        currentPage={currentPage}
        selectPage={selectPage}
      />

      <div className="simplistic-body">
        <SectionOne
          landingImageLeft={landingImageLeft}
          landingImageOpacity={landingImageOpacity}
        />
        <SectionTwo />
        <SectionThree
          handleSubmit={handleSubmit}
          formValues={formValues}
          onChangeValue={onChangeValue}
          sendingMessage={sendingMessage}
        />
      </div>

      <Notification right={right} />
    </div>
  );
};

export default SimplisticPage;
