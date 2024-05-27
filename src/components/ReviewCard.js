import React from "react";

function ReviewCard() {
  return (
    <div>
      <div className="review border border-1 my-4 p-2 rounded">
        <h4 className="mt-3 ms-3">Leave Your Reviews</h4>
        <div className="d-flex m-3 gap-4 flex-wrap">
          <input type="text" placeholder="Your Name" className="form-control" />
          <input
            type="email"
            placeholder="Your Email-id"
            className="form-control"
          />
        </div>
        <div className="m-3">
          <textarea
            placeholder="Comments..."
            cols="30"
            rows="4"
            className="form-control"
          ></textarea>
        </div>
        <div className="d-flex justify-content-between m-3 flex-wrap">
          <div className="d-flex gap-2 ">
            <p style={{ marginTop: "-5px" }}>Rating : </p>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div>
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
