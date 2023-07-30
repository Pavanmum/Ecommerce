import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-6">
      <div className="special-product-card ">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg " className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">POCO X2 Moblie Phones: 8gb...</h6>
            <ReactStars count={5} size={24} activeColor="#ffd700" />
            <p className="price">
              <span className="red-p">20000</span> <strike>40000</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">2</span>:
                <span className="badge rounded-circle p-2 bg-danger">3</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Product: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <Link className="button">Add to Card</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
