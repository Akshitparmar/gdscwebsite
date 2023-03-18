import React from "react";

const Team = (props) => {
  return (
    <div className="cont">
      <div className="row">
        <div className="col-md-4 animated fadeIn" key={props.id}>
          <div className="card">
            <div className="card-body">
              <div className="avatar">
                <img src={props.img} className="card-img-top" alt="" />
              </div>
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;