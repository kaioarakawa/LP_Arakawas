import React, { useEffect } from "react";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";
import isInView from "@/common/isInView";
//= Data
import data from "@/data/Main/portfolio.json";

function Stacks({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
    window.addEventListener("scroll", handleShowTabs);
    return () => window.removeEventListener("scroll", handleShowTabs);
  }, []);

  function handleShowTabs() {
    isInView({
      selector: ".portfolio-fixed .sub-bg .cont",
      isElements: true,
      callback(element) {
        element.classList.add("current");
        document
          .querySelector("#" + element.getAttribute("data-tab"))
          .classList.add("current");
      },
      whenOutOfView(element) {
        element.classList.remove("current");
        document
          .querySelector("#" + element.getAttribute("data-tab"))
          .classList.remove("current");
      },
    });

    const leftSide = document.getElementById("sticky_item");
    if (!leftSide) return;
    const width = leftSide.getBoundingClientRect().width;
    const portfolio = document
      .querySelector(".portfolio-fixed")
      .getBoundingClientRect();

    if (portfolio.top < 75 && portfolio.height / 2 < portfolio.bottom + 400) {
      leftSide.style.position = "fixed";
      leftSide.style.top = "0px";
      leftSide.style.width = width + "px";
      leftSide.classList.remove("is_stuck");
    } else if (portfolio.height / 2 > portfolio.bottom + 400) {
      leftSide.style.position = "absolute";
      leftSide.style.top = "auto";
      leftSide.style.bottom = "0";
      leftSide.style.width = width + "px";
      leftSide.classList.add("is_stuck");
    } else {
      leftSide.style.position = "relative";
      leftSide.style.top = "unset";
      leftSide.style.bottom = "unset";
      leftSide.style.width = "auto";
    }
  }

  return (
    <section className="portfolio-fixed" id="tecnologias">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-lg-6 rest" style={{ position: "relative" }}>
            <div className="left" id="sticky_item">
              {data.map((item, index) => (
                <div
                  id={`tab-${index + 1}`}
                  className="img bg-img"
                  data-background={`${"/dark/"}${
                    item.image
                  }`}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6 sub-bg right">
            {data.map((item, index) => (
              <div
                className={`cont ${index === 0 ? "active" : ""}`}
                data-tab={`tab-${index + 1}`}
                key={index}
              >
                <div className="img-hiden">
                  <img
                    src={`${"/dark/"}${item.image}`}
                    alt=""
                  />
                </div>
                <span className="sub-title mb-15">{item.number}</span>
                <h2 className="mb-15">{item.title}.</h2>
                <div className="row">
                  <div className="col-md-11 mb-25">
                    <p>{item.text}.</p>
                  </div>
                  {item.stacks.map((item, index1) => (
                      <div className="col-md-4 text-center" data-tab={`tab-${index + 1}`}
                        key={index1}>
                        <span className="icon-img-60 mb-40 ">
                          <img alt={item.text} src={item.icon} />
                        </span>
                        <h6>{item.text}</h6>
                      </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stacks;
