import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item) => (
        <div key={item.id} className="col mb-4">
          <div className="card" style={{ maxWidth: "210px" }}>
            <img src={item.image} alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <hr />
            <p>Location: {item.location.name}</p>
            <p>Species: {item.species}</p>
            <p>Gender: {item.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
