import React from "react";
import Card from "react-bootstrap/Card";

function Reviews() {
  return (
    <div className="d-flex justify-content-evenly  flex-wrap gap-4 mb-4">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <div className="d-flex justify-content-between ">
              <p>⭐⭐⭐⭐</p>
              <p>02 Feb 2024</p>
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quibusdam provident assumenda repellat sequi, ?
            </Card.Text>
            <div className="d-flex" style={{ height: "15px" }}>
              <i className="fa-solid fa-user m-1"></i>
              <p>
                <b>Caroline</b>
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <p>⭐⭐⭐</p>
              <p>10 Jun 2023</p>
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quibusdam provident assumenda repellat sequi, ?
            </Card.Text>
            <div className="d-flex" style={{ height: "15px" }}>
              <i className="fa-solid fa-user m-1"></i>
              <p>
                <b>Keylin</b>
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <p>⭐⭐⭐⭐⭐</p>
              <p>06 Apr 2020</p>
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quibusdam provident assumenda repellat sequi, ?
            </Card.Text>
            <div className="d-flex" style={{ height: "15px" }}>
              <i className="fa-solid fa-user m-1"></i>
              <p>
                <b>James</b>
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Reviews;
