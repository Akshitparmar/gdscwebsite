import React, { useState } from "react";
import workapi from "./WhatwedoData";
import "../styles/WhatwedoData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhatWeDo = () => {
  const [workData, setWorkData] = useState(workapi);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">  < font color="#FF2626" >We</font>  <font color="#0ca2d8"> are </font> <font color="#06d818">here</font> <font color="#e7c506">for?</font></h1>
          <div className="row">
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 text-center work-container-subdiv"
                    key={id}
                  >
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="sub-sub-heading">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;