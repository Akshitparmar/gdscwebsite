import React from "react";
import sdata from "../components/SeniorData";
import jdata from "../components/JuniorData";
import fdata from "../components/FacultyData";
import "../styles/Card.css";

function Teampage() {
  return (
    <div className="team-con">
    <div className="team-page container">
      <h1 className="main-team-heading">Faculty Advisor GDSC</h1>
      <div className="clearfix">
        <div className="row">
          {fdata.map((fdata) => (
            <div className="col-md-4 animated fadeIn" key={fdata.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={fdata.imageURL}
                      className="card-img-top"
                      alt={fdata.name}
                    />
                  </div>
                  <h5 className="card-title">{fdata.name}</h5>
                  <p className="card-text">{fdata.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="team-sub-heading">Leads</h1>
        <div className="row">
          {sdata.map((sdata) => (
            <div className="col-md-4 animated fadeIn" key={sdata.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={sdata.imageURL}
                      className="card-img-top"
                      alt={sdata.name}
                    />
                  </div>
                  <h5 className="card-title">{sdata.name}</h5>
                  <p className="card-text">{sdata.title}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
        <h2 className="main-team-heading">Core Members</h2>
        <div className="row">
          {jdata.map((jdata) => (
            <div className="col-md-4 animated fadeIn" key={jdata.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={jdata.imageURL}
                      className="card-img-top"
                      alt={jdata.name}
                    />
                  </div>
                  <h5 className="card-title">{jdata.name}</h5>
                  <p className="card-text">{jdata.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Teampage;