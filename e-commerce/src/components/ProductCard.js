import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg"
// import wishlist from "../images/wishlist.svg"
import wish from "../images/wish.svg"
import watch from "../images/watch.jpg"
import watch2 from "../images/headphone.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to="product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product images" />
            <img src={watch2} alt="headphone" />

          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for student..
            </h5>
            <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Voh agaya, dekho, dekho wo agaya fhodna kam chillana jyada, Mein basti ka hasti Mein malum kya kider se aata, P-town baby Mein tumlog ko accha seekharela, bhai aane do peti Yeh Bund k bal, mere samne banra brazy Mein basti ka, hasti bro
            </p>
            <p className="price"> Rs 150 lega</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product images" />
            <img src={watch2} alt="wishlist" />

          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for student..
            </h5>
            <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Voh agaya, dekho, dekho wo agaya fhodna kam chillana jyada, Mein basti ka hasti Mein malum kya kider se aata, P-town baby Mein tumlog ko accha seekharela, bhai aane do peti Yeh Bund k bal, mere samne banra brazy Mein basti ka, hasti bro
            </p>
            <p className="price"> Rs 150 lega</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent5">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>

  );
};

export default ProductCard;
